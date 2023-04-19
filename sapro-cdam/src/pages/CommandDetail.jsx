import React, { useState } from 'react';
import { Container, Typography, Box, Button, css } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ChecklistItemCollection } from '../ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Checklist, ChecklistItem } from '../models';
import { Link } from '@aws-amplify/ui-react';


function CommandDetail() {
    let params = useParams(); // This is how you collect the information put in the url, in this case the command id

    const [command, setCommand] = useState(DataStore.query(Checklist, { id: params.id }))
    const [completions, setCompletions] = useState([])
    const [flag, setFlag] = useState(0)

    const nav = useNavigate()

    // The new and improved way to get Command Details, now without the Race Condition and overuse of the API
    function getCommand() {
        if (flag <= 0) {
            DataStore.query(Checklist, { id: params.id }).then(r => setCommand(r))
            setFlag(1)
        }
    }

    function toggle(seed) {
        return !seed
    }

    async function submitChanges() {
        try {
            /* Models in DataStore are immutable. To update a record you must use the copyOf function
                to apply updates to the item’s fields rather than mutating the instance directly */
            // Nicely, this handles the empty list 
            let completed = 0;
            for (let i = 0; i < completions.length; i++) {
                let itemToUpdate = await DataStore.query(ChecklistItem, { id: completions[i].id });
                await DataStore.save(ChecklistItem.copyOf(itemToUpdate, item => {
                    // Update the values on {item} variable to update DataStore entry
                    item.completion = completions[i].done;
                }));
                if (completions[i].done) {
                    completed++
                }
            }

            console.log(completed / completions.length)

            await DataStore.save(Checklist.copyOf(command, item => {
                // TODO: This avoids the NaN issue, but is still imperfect
                // one can click on an unchecked item and then click it again to get a list of 1 updated item false, resulting in 0% completion reported
                let perc = (completed / completions.length) * 100
                if (perc >= 0) {
                    item.percentCompletion = perc
                }
            }));

            //TODO: Not sure if this is worth it for the amount of extra queries it will cause, but it's nice to see the %completion update right away
            DataStore.query(Checklist, { id: params.id }).then(r => setCommand(r))

        } catch (err) { console.log('error pushing value to Checklist: ', err) }
    }

    getCommand();

    return (

        <Box sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>
            <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>

                <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center' }} >
                    {command.commandName}'s Checklist Status
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Command POC: {command.commandPOC}
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    POC Email: <Link href={'mailto:' + command.commandPOCEmail}>{command.commandPOCEmail}</Link>
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Command Checklist Completion: {command.percentCompletion}%
                </Typography>

                <Container maxWidth="xs" sx={{ bgcolor: '#D3D3D3', pt: 2, pb: 2, alignItems: 'center' }}>
                    <Button variant='contained' fullWidth onClick={getCommand}>Add Checklist Items</Button>
                </Container>

                <Container maxWidth="xs" sx={{ bgcolor: '#D3D3D3', pt: 0, pb: 4, alignItems: 'center' }}>
                    <Button variant='contained' fullWidth onClick={submitChanges}>Submit All Changes</Button>
                </Container>

                <ChecklistItemCollection
                    overrideItems={({ item, index }) => ({
                        //TODO: this works great as proof of concept, but it doesn't actually *remove* the checklist items that this command shouldn't have access to
                        display: item.checklist.id != command.id ? 'none' : 'flex',
                        onMouseOver: () => {
                            if (completions.find(a => a.id === item.id) == null) {
                                completions.push({
                                    id: item.id,
                                    done: item.completion,
                                    obj: item
                                })
                            }
                        },
                        overrides: {
                            "CheckboxField": {

                                onClick: () => {
                                    const newList = [...completions]
                                    const clItem = newList.find(
                                        a => a.id === item.id
                                    );
                                    clItem.done = toggle(clItem.done);
                                    setCompletions(newList);

                                    console.log(completions)
                                },
                                label: item.itemName,
                                defaultChecked: item.completion

                            },
                            // Not sure why these aren't working out of the box.... will look into soon
                            "owner": {
                                children: item.responsibleParty
                            },
                            "tier": {
                                children: item.tier
                            },
                            "reference": {
                                children: item.reference
                            },
                            "Button": {
                                onClick: () => {
                                    nav(item.id)
                                }
                            }
                        }
                    })} />

            </Container>

        </Box>
    );
}

export default CommandDetail;
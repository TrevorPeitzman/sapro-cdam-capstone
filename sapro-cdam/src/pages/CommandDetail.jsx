import React, { useState } from 'react';
import { Container, Typography, Box, Button, css } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
    ChecklistItemCollection
} from '../ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Checklist, ChecklistItem } from '../models';
import { Link } from '@aws-amplify/ui-react';
import FileUpload from "react-mui-fileuploader" //https://github.com/rouftom/react-mui-fileuploader#readme


// Somewhat rudimentary mutex...
let flag = 0



// TODO: find a way to ensure only the one specific command's checklist shows up, not the same for all



function CommandDetail() {
    const [command, setCommand] = useState([])
    const [completions, setCompletions] = useState([])

    let params = useParams(); // This is how you collect the information put in the url, in this case the command id

    async function getCommandName() {
        try {
            let model;
            if (flag === 0) {
                model = await DataStore.query(Checklist, { id: params.id });
                setCommand(model)
                flag++
            }
            // console.log(model.id) //TODO: this executes three times for some reason...  this may waste money unnecessarily
        } catch (err) { console.log('error fetching Checklists') }
    }

    function toggle(seed) {
        // console.log("seed: ", seed)
        // console.log("notseed: ", !seed)
        return !seed
    }

    async function submitChanges() {
        try {
            /* Models in DataStore are immutable. To update a record you must use the copyOf function
                to apply updates to the item’s fields rather than mutating the instance directly */
            // Nicely, this handles the empty list 
            for (let i = 0; i < completions.length; i++) {
                let itemToUpdate = await DataStore.query(ChecklistItem, { id: completions[i].id });
                await DataStore.save(ChecklistItem.copyOf(itemToUpdate, item => {
                    // Update the values on {item} variable to update DataStore entry
                    item.completion = completions[i].done;
                }));
            }
        } catch (err) { console.log('error pushing value to Checklist: ', err) }
    }

    getCommandName();

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

                <Container maxWidth="xs" sx={{ bgcolor: '#D3D3D3', pt: 2, pb: 4, alignItems: 'center' }}>
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
                            // console.log(completions)
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

                            }
                        }
                    })} />

                {/* <button onClick={getCommandName}>View Checklists</button> */}


            </Container>

        </Box>
        // </div>
    );
}

export default CommandDetail;
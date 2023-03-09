import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { Container, Typography, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getChecklist } from '../graphql/queries.js'
import {
    ChecklistItemCollection
} from '../ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Checklist } from '../models';


// const oneTodo = await API.graphql(
//     graphqlOperation(queries.getChecklist, { id: useParams().id })
// );

function CommandDetail() {
    const [command, setCommand] = useState([])
    const [commandID, setCommandID] = useState([])

    let params = useParams(); // This is how you collect the information put in the url, in this case the command id

    async function getCommandName() {
        try {
            // const commandNameIn = await API.graphql(graphqlOperation(getChecklist, { id: params.id }))
            // const model = await DataStore.query(Checklist, { id: params.id });
            // setCommand(model)
            // setCommandID(commandNameIn.data.getChecklist.id)
            // console.log(commandNameIn) //TODO: this executes three times for some reason...  this may waste money unnecessarily
            // console.log(model.id) //TODO: this executes three times for some reason...  this may waste money unnecessarily
            // console.log(commandNameIn.data.getChecklist.id) //TODO: this executes three times for some reason...  this may waste money unnecessarily
        } catch (err) { console.log('error fetching Checklists') }
    }


    getCommandName();

    return (

        <Box sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>
            <Container maxWidth="sm" sx={{ bgcolor: '#D3D3D3', pt: 6, pb: 6 }}>

                <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    {command.commandName}'s Checklist Status
                </Typography>

                <Container maxWidth="xs" sx={{ bgcolor: '#D3D3D3', pt: 2, pb: 4, alignItems: 'center' }}>
                    <Button variant='contained' fullWidth>Submit All Changes</Button>
                </Container>

                <ChecklistItemCollection />

                {/* <button onClick={getCommandName}>View Checklists</button> */}


            </Container>

        </Box>
    );
}

export default CommandDetail;
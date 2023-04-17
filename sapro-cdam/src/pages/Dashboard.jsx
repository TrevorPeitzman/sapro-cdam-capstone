import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import { DataStore } from '@aws-amplify/datastore';
import { ChecklistItem } from '../models';
import {
    EditProfile
} from '../ui-components';


async function createDefaultItems(params) {
    const star = await DataStore.save(
        new ChecklistItem({
            // "checklist": /* Provide a Checklist instance here */,
            "itemName": "Lorem ipsum dolor sit amet",
            "completion": true,
            "mandatory": true,
            "description": "Lorem ipsum dolor sit amet",
            "reference": "Lorem ipsum dolor sit amet",
            "tier": 1020,
            "responsibleParty": "Lorem ipsum dolor sit amet",
            // "supportingDocuments": /* Provide a SupportingDocument instance here */
        })
    )
}


function Dashboard() {
    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom sx={{ pt: 6, pb: 6, textAlign: 'center' }}>
                Dashboard
            </Typography>
            
            {/* <EditProfile /> */}

        </Container>
    );
}

export default Dashboard;
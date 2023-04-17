import React from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';
import { DataStore } from '@aws-amplify/datastore';
import { ChecklistItem } from '../models';
import {
    EditProfile
} from '../ui-components';


function Account() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h2" gutterBottom sx={{ pt: 6, pb: 6, textAlign: 'center' }}>
                Account
            </Typography>

            <EditProfile />

        </Container>
    );
}

export default Account;
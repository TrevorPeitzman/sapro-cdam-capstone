import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import {
    EditProfile
} from './ui-components';


function Dashboard() {
    return (
        <Container>
            {/* TODO: Needs testing */}
            {/* <Grid> */}
            <h1>This is the User's Dashboard page</h1>

            {/* </Grid> */}
            <EditProfile />

        </Container>
    );
}

export default Dashboard;
import React from 'react';

import { Container, Typography, Link, Divider } from '@mui/material';

import {
    AccessRequestListCreateForm,
    ChecklistCreateForm
} from '../ui-components';

function Admin() {
    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h3" component="h2" gutterBottom sx={{ pt: 6, pb: 6, textAlign: 'center' }}>
                    Admin Panel
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom align='center'>
                    Add a Command to the List
                </Typography>

                <ChecklistCreateForm />

                <Divider variant="middle" />

                {/* <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ pt: 6, pb: 0, textAlign: 'center' }}>
                    Request Access to the Admins list
                </Typography> */}

                {/* <AccessRequestListCreateForm /> */}

            </Container>
        </>
    );
}

export default Admin;
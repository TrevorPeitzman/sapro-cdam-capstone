import React from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button } from '@mui/material';


async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Logout() {
    signOut();
    return (
        <Box sx={{pt: 6, pb: 6 }}>
            <Container maxWidth="sm" sx={{ pt: 6, pb: 6 }}>

                <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Successfully Logged Out
                </Typography>

                <Container maxWidth="xs" sx={{ pt: 2, pb: 4, alignItems: 'center' }}>
                    {/* TODO: This is the right way to do buttons/links to internal pages as it will be faster
            than making a whole new HTTP Request as would happen in an "a" tag */}
                    <Button
                        variant='contained'
                        fullWidth
                        key="Login"
                        component={Link}
                        to="/"
                    >
                        Return to Login
                    </Button>

                </Container>

            </Container>

        </Box>
    );
}

export default Logout;
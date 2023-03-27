import React from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button } from '@mui/material';

function NoPage() {
    return (
        <Box sx={{ pt: 6, pb: 6 }}>
            <Container maxWidth="sm" sx={{ pt: 6, pb: 6 }}>

                <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                    404: Page not found!
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
                        Click here to go home
                    </Button>

                </Container>

            </Container>
        </Box>
    );
}

export default NoPage;
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

// TODO: Update and fix the header formatiing on this.

function Contact() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h2" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                If you have any questions or concerns about the DoD Sexual Assault Prevention and Response Office Oversight Checklist Database Analysis for Management (CDAM) tool, please feel free to contact us. We would be happy to assist you.
            </Typography>
            <Typography variant="body1" gutterBottom>
                You can reach us by email at <Link href="mailto:test@usna.edu">test@usna.edu</Link>.
            </Typography>
            <Typography variant="body1">
                Thank you for using the CDAM. We appreciate your feedback and look forward to hearing from you.
            </Typography>
        </Container>
    );
}

export default Contact;
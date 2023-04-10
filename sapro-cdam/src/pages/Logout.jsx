import React from 'react';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


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
        <>
            <h1>Successfully Logged Out</h1>
            {/* TODO: This is the right way to do buttons/links to internal pages as it will be faster
            than making a whole new HTTP Request as would happen in an "a" tag */}
            <Button
                key="Login"
                sx={{ my: 2, color: 'blue', display: 'block'}}
                component={Link} 
                to="/"
            >
                Login            
            </Button>
        </>
    );
}

export default Logout;
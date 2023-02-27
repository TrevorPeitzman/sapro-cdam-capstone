import React, { useState } from 'react';
import { Storage } from 'aws-amplify'
import { styled } from '@mui/material/styles';
import FileUpload from "react-mui-fileuploader" //https://github.com/rouftom/react-mui-fileuploader#readme
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography, Container } from '@mui/material';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon, SpeedDialIcon } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function FileUploadPage() {
    const [filesToUpload, setFilesToUpload] = useState([]);
    const [filesInBucket, setFilesInBucket] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [uploadFailure, setUploadFailure] = useState(false)

    const handleFileUploadError = (error) => {
        console.log("File Upload Error: ", error);
        setUploadFailure(true);
    }

    const handleFilesChange = (files) => {
        // Update chosen files
        setFilesToUpload([...files])
    };

    async function uploadFiles() {
        filesToUpload.forEach((file) => {
            try {
                setUploadSuccess(true);
                Storage.put(file.name, file); //TODO: This is supposed to have "await" before it, not sure if not having it will cause problems
                // TODO: Make it so that the list of files is cleared when an upload is successful
            } catch (error) {
                setUploadFailure(true);
                console.log("Error uploading file: ", error);
            }
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setUploadSuccess(false);
        setUploadFailure(false);
    };

    async function listFiles() {
        // for listing ALL files without prefix, pass '' instead. TODO: eventually have this be a command/item-specific directory
        const response = await Storage.list('');
        setFilesInBucket(response);
        console.log(response); //TODO: Remove, for debugging only
    }

    return (
        <Container>
            <Snackbar open={uploadSuccess} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>Upload Successful</Alert>
            </Snackbar>
            {/* TODO: The error message snackbar is untested */}
            <Snackbar open={uploadFailure} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error'>Upload Failed! Try Again.</Alert>
            </Snackbar>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={0}>
                    <Grid xs>
                        <Item>
                            <FileUpload
                                title=""
                                header='[ Drag and Drop ]'
                                showPlaceholderImage={false}
                                multiFile={true}
                                maxUploadFiles={3} //TODO: this is arbitrary, may benefit from an actual limit
                                onFilesChange={handleFilesChange}
                                onError={handleFileUploadError}
                                onContextReady={(context) => { }}
                            />
                            <Button onClick={uploadFiles}>Upload</Button>
                        </Item>
                    </Grid>
                    <Grid xs={8}>
                        <Item>
                            <List>
                                <Button onClick={listFiles}>List Files</Button>
                                {filesInBucket.map((file) => (
                                    <ListItem key={file.key}>
                                        {/* <ListItemIcon>
                                            <SpeedDialIcon />
                                        </ListItemIcon> */}
                                        {/* TODO: Need permissions in S3 to be set properly in order for this to work */}
                                        <ListItemButton component="a" href={"https://sapro-cdam-document-store12606-dev.s3.amazonaws.com/public/" + file.key} target="_blank">
                                            <ListItemText primary={file.key} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default FileUploadPage;
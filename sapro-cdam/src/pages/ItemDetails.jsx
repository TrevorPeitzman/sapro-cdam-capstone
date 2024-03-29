import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify'
import { styled } from '@mui/material/styles';
import FileUpload from "react-mui-fileuploader" //https://github.com/rouftom/react-mui-fileuploader#readme
import { Grid, Box, Paper, Button, Snackbar, Alert, Menu, MenuItem, Typography, Container } from '@mui/material';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon, SpeedDialIcon } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { FileUploader } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { ChecklistItem } from '../models';
import { Link } from '@aws-amplify/ui-react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function ItemDetailsPage() {
    const [filesToUpload, setFilesToUpload] = useState([]);
    const [filesInBucket, setFilesInBucket] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [uploadFailure, setUploadFailure] = useState(false)
    const [itemDetails, setItemDetails] = useState([])
    const [flag, setFlag] = useState(0)

    let params = useParams()
    let alerts = 0;

    // TODO: this can most likely be replaced with a useEffect statement, but the project is due tomorrow and I'm running out of dev time
    function getItemDetails() {
        if (flag <= 0) {
            DataStore.query(ChecklistItem, { id: params.itemID }).then(r => setItemDetails(r));
            setFlag(1)
        }
    }

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
                Storage.put(params.id + "/" + params.itemID + "/" + file.name, file); //TODO: This is supposed to have "await" before it, not sure if not having it will cause problems
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
        const response = await Storage.list(params.id + "/" + params.itemID + "/");
        setFilesInBucket(response.results);
        // console.log(response); //TODO: Remove, for debugging only
    }

    function alertNoFiles() {
        if (filesInBucket.length === 0 && alerts === 0) {
            alert("No supporting documents uploaded.\nPlease correct this before marking as complete.")
            alerts++
        }
    }

    useEffect(() => {
        async function fetchData() {
            getItemDetails();
            listFiles();
        }
        fetchData();
    }, []);

    return (
        <Container onMouseLeave={alertNoFiles}>
            <Typography variant="h4" component="h3" gutterBottom sx={{ textAlign: 'center', pt: 6 }} >
                {itemDetails.itemName}
            </Typography>

            <Snackbar open={uploadSuccess} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>Upload Successful</Alert>
            </Snackbar>
            {/* TODO: The error message snackbar is untested */}
            <Snackbar open={uploadFailure} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error'>Upload Failed! Try Again.</Alert>
            </Snackbar>
            <Box sx={{ flexGrow: 1, padding: 2 }}>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Details: {itemDetails.description}
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Responsible Party: {itemDetails.responsibleParty}
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Reference: {itemDetails.reference}
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Tier: {itemDetails.tier}
                </Typography>

                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center' }} >
                    Completion: {itemDetails.completion ? "Yes" : "No"}
                </Typography>

                {/* TODO: this time should be more user friendly in terms of timezone and formatting */}
                <Typography variant="p" component="p" gutterBottom sx={{ textAlign: 'center', pb: 2 }} >
                    Last Updated: {itemDetails.updatedAt}
                </Typography>

                <Grid container spacing={0}>
                    <Grid xs>
                        <Item>
                            <FileUpload
                                title=""
                                header='[ Drag and Drop ]'
                                // header=''
                                leftLabel=""
                                rightLabel=""
                                buttonLabel="click here"
                                allowedExtensions={['pdf']}
                                showPlaceholderImage={false}
                                multiFile={false}
                                maxUploadFiles={1} //TODO: this is arbitrary, may benefit from an actual limit
                                onFilesChange={handleFilesChange}
                                onError={handleFileUploadError}
                                onContextReady={(context) => { }}
                            />
                            {/* <FileUploader
                                acceptedFileTypes={['.pdf']}
                                maxFileCount={1}
                                variation="button"
                                accessLevel="public"
                            /> */}
                            <Button onClick={uploadFiles}>Upload</Button>
                        </Item>
                    </Grid>
                    <Grid xs={8}>
                        <Item>
                            <List>
                                <Button onClick={listFiles}>List of Files</Button>
                                {filesInBucket.map((file) => (
                                    <ListItem key={file.key}>
                                        {/* <ListItemIcon>
                                            <SpeedDialIcon />
                                        </ListItemIcon> */}
                                        {/* TODO: Need permissions in S3 to be set properly in order for this to work */}
                                        <ListItemButton component="a" href={"https://sapro-cdam-document-store12606-dev.s3.amazonaws.com/public/" + file.key} target="_blank">
                                            <ListItemText primary={file.key.split("/")[2]} />
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

export default ItemDetailsPage;
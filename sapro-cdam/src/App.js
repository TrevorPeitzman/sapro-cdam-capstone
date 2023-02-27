/* src/App.js */
// Modified by Trevor Peitzman, USNA 2023

import logo from './logo.svg';
import './App.css';

import awsExports from "./aws-exports";
import React, { useEffect, useState } from 'react'
import { Amplify, API, Auth, Hub, graphqlOperation, Storage } from 'aws-amplify'
import { createChecklist } from './graphql/mutations'
import { listChecklists } from './graphql/queries'
import { useAuthenticator, Authenticator, Button, Heading, View, Image, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Snackbar stuff
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

Amplify.configure(awsExports);

const initialState = { commandName: "" };

export default function App({ signOut, user }) {
  const [formState, setFormState] = useState([])
  const [Checklists, setChecklists] = useState([])
  const [filesState, setFileState] = useState([])
  // const { user, signOut } = useAuthenticator((context) => [context.user])
  const { route } = useAuthenticator(context => [context.route])

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="DoD SAPRO logo"
            src="https://www.sapr.mil/sites/default/files/SAPRO_Seal_160x160.png"
          />
        </View>
      );
    },
  }

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      attributes.email = attributes.email.toLowerCase();

      // This is how we check if the email is from an approved domain
      console.log("I'm in the email checker"); //TODO: Remove this logging
      if (/^\w+([.-]?\w+)*@usna.edu$/.test(attributes.email)) {
        console.log("email check success");
        return Auth.signUp({
          username,
          password,
          attributes,
        });
      } else {
        console.log("email check fail");
        // TODO: fix this to make it a bit cleaner of an error than a popup message
        // alert("This email domain is not permitted. Please sign up with a permitted email.");
        <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert severity="error" sx={{ width: '100%' }}>
            This email domain is not permitted. Please sign up with a permitted email.
          </Alert>
        </Snackbar>
        attributes.email = "nope";
        return Auth.signUp({
          username,
          password,
          attributes,
        });
      }
    },
  }

  useEffect(() => {
    fetchChecklists()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchChecklists() {
    try {
      const checklistData = await API.graphql(graphqlOperation(listChecklists))
      const Checklists = checklistData.data.listChecklists.items
      setChecklists(Checklists)
    } catch (err) { console.log('error fetching Checklists') }
  }

  async function addChecklist() {
    try {
      const checklist = { ...formState }
      console.log(checklist)
      if (!formState.commandName) {
        console.log("Not enough info supplied to create, try again.") //TODO: fix this so that it is a snackbar or error message popup
        return
      }
      setChecklists([...Checklists, checklist])
      setFormState(initialState)
      document.getElementById("chklst_create").reset()
      console.log(checklist)
      await API.graphql(graphqlOperation(createChecklist, { input: checklist }))
    } catch (err) {
      console.log('error creating checklist:', err)
    }
  }

  async function uploadFile(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file);
      <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }} message="Upload Successful" autoHideDuration={6000} />
    } catch (error) {
      console.log("Error uploading file: ", error);
      <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }} message="Upload Unsuccessful" />
    }
  }

  async function listFiles() {
    const files = await Storage.list('')
    let signedFiles = files.map(f => Storage.get(f.key))
    signedFiles = await Promise.all(signedFiles)
    console.log('signedFiles: ', signedFiles)
    console.log('Files: ', files)
    setFileState([...filesState, files])

    // {files.map((f) => (
    //   <Button
    //       key={f.key}
    //       sx={{ my: 2, color: 'white', display: 'block' }}123
    //       component="a" 
    //       to={signedFiles}
    //   >
    //       {f.key}
    //   </Button>
    // ))}
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
  }

  async function download(fileKey) {
    const result = await Storage.get(fileKey, { download: true });
    downloadBlob(result.Body, 'filename');
  }

  return (
    <div style={styles.container}>
      <Authenticator services={services} components={components} initialState="signIn">
        {/* {({ signOut }) => <button onClick={signOut}>Sign out</button>} */}
      </Authenticator>

      {/*TODO: this is kinda a shitty way of discovering if the user is authenticated, potentially change this */}
      {route === 'authenticated' &&
        <>
          <h2>SAPRO-CDAM Checklists</h2>
          <form id="chklst_create">
            <input
              onChange={event => setInput('commandName', event.target.value)}
              style={styles.input}
              value={formState.commandName}
              placeholder="Command Name"
            />
            <input
              onChange={event => setInput('responsibleParty', event.target.value)}
              style={styles.input}
              value={formState.responsibleParty}
              placeholder="Checklist Owner"
            />
            <input
              onChange={event => setInput('id', event.target.value)}
              style={styles.input}
              value={formState.id}
              placeholder="ID"
            />
          </form>
          <button style={styles.button} onClick={addChecklist}>Create New Checklist</button>

          <button onClick={fetchChecklists}>View Checklists</button>
          {
            // console.log(Checklists)
          }
          {/* <div style={styles.container}>
            <input type="file" onChange={uploadFile} />
            <button style={styles.button} onClick={uploadFile}>Upload File</button>
            <button style={styles.button} onClick={listFiles}>List Files</button>
          </div> */}
          <div>
            {
              // console.log(filesState, "foo") //TODO: probably need to reset fileState every time the loop runs so that we don't end up with repetition
            }
            {
              filesState.map((files) => (
                // <img
                //   key={i}
                //   src={file} //TODO: FIX THJIS SHIXXXX
                //   style={{height: 300}}
                // />
                <a href="/">{files.key}</a>
              ))
            }
          </div>
          {
            Checklists.map((checklist, index) => (
              <div key={checklist.id ? checklist.id : index} style={styles.checklist}>
                {/* TODO: Potentially build in a handler page so that we don't have to have a unique page for every checklist */}
                <a href={checklist.id}><p style={styles.checklistName}>{checklist.commandName}</p></a>
                <p style={styles.checklistDescription}>{checklist.responsibleParty}</p>
              </div>
            ))
          }
        </>
      }
    </div>
  )
};

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  checklist: { marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  checklistName: { fontSize: 20, fontWeight: 'bold' },
  checklistDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
};

// export default Authenticator(App);
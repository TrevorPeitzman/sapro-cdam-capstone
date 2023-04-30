/* src/App.js */
// Modified by Trevor Peitzman, USNA 2023

import logo from './logo.svg';
import './App.css';

import awsExports from "./aws-exports";
import React, { useEffect, useState } from 'react'
import { Amplify, API, Auth, Hub, graphqlOperation, Storage } from 'aws-amplify'
import { useAuthenticator, Authenticator, Heading, View, Image, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import Report from "./pages/Report"
import { DataStore } from '@aws-amplify/datastore';
import { Checklist } from './models';


import {
  ChecklistCollection, NavBar
} from './ui-components';

// Snackbar stuff
import MuiAlert from '@mui/material/Alert';
import { Snackbar, Box, Container, Typography, Button } from '@mui/material';
import CommandDetail from './pages/CommandDetail';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

Amplify.configure(awsExports);

const initialState = { commandName: "" };

async function getUserGroups() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const accessToken = user.signInUserSession.accessToken;
    const groups = accessToken.payload['cognito:groups'];
    console.log('First User group:', groups[0]);
    return groups;
  } catch (error) {
    console.error('Error retrieving user groups. User is most likely not in a group.\n\n', error);
    return [""];
  }
}

export default function App({ signOut, user }) {
  const [formState, setFormState] = useState([])
  const [Checklists, setChecklists] = useState([])
  const [groups, setGroups] = useState([]);

  const { route } = useAuthenticator(context => [context.route])

  const nav = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const groups = await getUserGroups();
      // TODO: WARNING! This only takes the first item in the returned groups array. If this becomes a problem, change it ;)
      setGroups(groups[0])
    }
    fetchData();
  }, []);

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
      // console.log("I'm in the email checker"); //TODO: Remove this logging
      // if (/^\w+([.-]?\w+)*[@usna.edu]$/.test(attributes.email)) {
      let domain = attributes.email.split("@")[1]
      if (domain === "usna.edu" || domain === 'mail.mil') {
        console.log("email check success");
        return Auth.signUp({
          username,
          password,
          attributes,
        });
      } else {
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

  return (
    <Authenticator services={services} components={components} initialState="signIn">

      {/*TODO: this is kinda a shitty way of discovering if the user is authenticated, potentially change this */}
      {route === 'authenticated' && groups.includes('Administrators') &&
        <main>
          <Box
            sx={{
              bgcolor: '#D3D3D3',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Admin Command Search
              </Typography>
            </Container>

            <Container maxWidth="xs" sx={{ bgcolor: '#D3D3D3', pt: 0, pb: 0, alignItems: 'center' }}>
              <Button variant='contained' fullWidth onClick={() => { nav("/Admin") }}>Add command to list</Button>
            </Container>

            {/* TODO: Figure out a way to center this */}
            <Container maxWidth="sm" sx={{ pt: 4, pb: 6 }}>
              <ChecklistCollection
                overrideItems={({ item }) => ({
                  overrides: {
                    "Button35742723": {
                      onClick: () => {
                        console.log(item.id)
                        nav("CommandDetail/" + item.id)
                      }
                    },
                    "Button36512717": {
                      onClick: async () => {
                        console.log(item);
                        if (window.confirm("Are you sure you want to delete the " + item.commandName + " checklist at this time? \n All progress on this command will be lost.")) {
                          const modelToDelete = await DataStore.query(Checklist, item.id);
                          DataStore.delete(modelToDelete);
                          console.log("Checklist deleted", item.id)
                        } else {
                          console.log("checklist deletion aborted");
                        }
                      }
                    }
                  }
                })
                }
              />
            </Container>
          </Box>
        </main>
      }

      {route === 'authenticated' && groups.includes('SAPRO-Auditors') &&
        <main>
          <Box
            sx={{
              bgcolor: '#D3D3D3',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Auditor's Command Search
              </Typography>
            </Container>

            <Container maxWidth="sm" sx={{ pt: 6, pb: 6 }}>
              <ChecklistCollection
                overrideItems={({ item }) => ({
                  overrides: {
                    "Button35742723": {
                      onClick: () => {
                        console.log(item.id)
                        nav("CommandDetail/" + item.id)
                      }
                    },
                    "Button36512717": {
                      display: 'none'
                    }
                  }
                })
                }
              />
            </Container>
          </Box>
        </main>
      }

      {route === 'authenticated' && groups.includes('Installation-Commanders') &&
        <main>
          <Container maxWidth="sx">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Installation Commander Dashboard
            </Typography>
          </Container>
          {/* TODO: Determine how to store and pass the id associated with the installation the commander is in charge of */}
          {/* const model = await DataStore.query(Checklist, (c) => c.commandName.eq("Maryland")); */}
          <Report />
        </main>
      }

      {route === 'authenticated' && groups.includes('Work-Center-Admins') &&
        <main>
          <Container maxWidth="sx">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Work Center Admin Dashboard
            </Typography>
          </Container>
          {/* TODO: Determine how to store and pass the id associated with the installation the Work Center Admin is in charge of */}
          <CommandDetail />
        </main>
      }

      {route === 'authenticated' && groups.length === 0 &&
        <main>
          <Container maxWidth="sx">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              You are not currently in a group!
            </Typography>
          </Container>
        </main>
      }

    </Authenticator>
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
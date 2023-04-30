import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Container, Typography, Link, Divider } from '@mui/material';

import {
  AccessRequestListCreateForm,
  ChecklistCreateForm
} from '../ui-components';


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

function Admin() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const groups = await getUserGroups();
      const user = await Auth.currentAuthenticatedUser();

      // TODO: WARNING! This only takes the first item in the returned groups array. If this becomes a problem, change it ;)
      setGroups(groups[0])
    }
    fetchData();
  }, []);


  return (
    <>
      {groups.includes('Administrators') &&

        <Container maxWidth="sm">
          <Typography variant="h3" component="h2" gutterBottom sx={{ pt: 6, pb: 6, textAlign: 'center' }}>
            Admin Panel
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom align='center'>
            Add a Command to the List
          </Typography>

          <ChecklistCreateForm />
        </Container>

      }

      <Container maxWidth="sm">
        <Divider variant="middle" />

        <Typography variant="h5" component="h2" gutterBottom align='center' sx={{ pt: 6, pb: 0, textAlign: 'center' }}>
          Request Access to the Admins list
        </Typography>

        {/* TODO: find way to get the userID into the submission (overrides?) ... I just made it nullable for now so we don't have to worry about it */}
        <AccessRequestListCreateForm />
      </Container>
    </>
  );
}

export default Admin;
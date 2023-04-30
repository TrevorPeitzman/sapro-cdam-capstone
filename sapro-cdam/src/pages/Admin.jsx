import React, { useState, useEffect } from 'react';
import { Amplify, Auth, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


async function getGroupForUser(username) {
  let apiName = 'AdminQueries';
  let path = '/listGroupsForUser';
  let myInit = {
    queryStringParameters: {
      // "groupname": "Administrators",
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }
  try {
    const response = await API.get(apiName, path, myInit);
    console.log("buff", response.Groups[0].GroupName);
    return String(response.Groups[0].GroupName);
  } catch (error) {
    return "none"
  }
}

function getGroups(userList) {
  // console.log("foob", userList)

  let retmap = new Map();

  userList.forEach(user => {
    retmap.set(user, getGroupForUser(user))    
  });

  console.log(retmap);
  return retmap;
}

async function disableUser(username) {
  try {
    const url = 'https://5kyvav817h.execute-api.us-east-1.amazonaws.com/dev';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    });
    if (response.ok) {
      console.log('User disabled:', username);
    } else {
      console.error('Error disabling user:', response.statusText);
    }
  } catch (error) {
    console.error('Error disabling user:', error);
  }
}

async function getUserGroups() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const accessToken = user.signInUserSession.accessToken;
    const groups = accessToken.payload['cognito:groups'];
    console.log('User groups:', groups);
    return groups;
  } catch (error) {
    console.error('Error retrieving user groups:', error);
    return [];
  }
}


async function isAdminUser() {
  const groups = await getUserGroups();
  return groups.includes('Administrators');
}

async function getDeletableUserGroups() {
  return ['Installation-Commanders', 'SAPRO-Auditors', 'Work-Center-Admins'];
}

let nextToken;

async function listUsers(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsers';
  let myInit = {
    queryStringParameters: {
      // "groupname": "Administrators",
      "limit": limit,
      "token": nextToken
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;
  return rest;
}

function Admin() {
  const [users, setUsers] = useState([]);
  const [usersGroups, setUsersGroups] = useState([]);
  const [deletableGroups, setDeletableGroups] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const isUserAdmin = await isAdminUser();
      setIsAdmin(isUserAdmin);
      if (isUserAdmin) {
        const fetchedUsers = await listUsers();
        const fetchedDeletableGroups = await getDeletableUserGroups();
        setUsers(fetchedUsers.Users);
        setDeletableGroups(fetchedDeletableGroups);

        const returnedGroups = await getGroups(users);
        setUsersGroups(returnedGroups);
        // console.log("Users:", fetchedUsers.Users)
      }
    }
    fetchData();
  }, []);

  async function handleDisableUser(username) {
    await disableUser(username);
    const updatedUsers = users.map(user => {
      if (user.username === username) {
        return {
          ...user,
          enabled: false
        };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  if (isAdmin) {
    return (
      <>
        <h1>This is the Admin's page</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Groups</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.Attributes.email}>
                <td>{user.Username}</td>
                {/* NOTE: This is actually heinous, but check the log for the full visualization of the returned data structure */}
                <td>{user.Attributes[2].Value}</td>
                {/* <td>{(test) => {test = getGroups(user.Username); console.log("bruh", user.Username); return test;}}</td>  */}
                {/* <td>{usersGroups}</td>  */}
                {/* <td>
                  {deletableGroups.some(group => user.groups.includes(group)) ? (
                    <button onClick={() => handleDisableUser(user.username)}>Delete</button>
                  ) : (
                    'N/A'
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => getGroups("a5371d76-8fd2-4bf4-afc5-17806d25d887")}>List Editors {() => getGroups("f62c37c5-8ff2-4ace-b6aa-e2491fc9e2b3")}</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Sorry! You do not have access to this page!</h1>
        <h2>If you think this is an error, please contact an admin.</h2>
        {/* <button onClick={() => listUsers(5)}>List Editors</button> */}
      </>
    );
  }
}

export default Admin;
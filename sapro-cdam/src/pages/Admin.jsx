import React, { useState, useEffect } from 'react';
import { Amplify, Auth, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '../style.css';
// import {Table} from 'antd';
Amplify.configure(awsconfig);


async function disableUser(username) {
  let apiName = 'AdminQueries';
  let path = '/disableUser';
  let myInit = {
    body: {
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }
  
  const response = await API.post(apiName, path, myInit);
  return response;
}

async function enableUser(username) {
  const apiName = 'AdminQueries';
  const path = '/enableUser';
  const myInit = {
    body: {
      "username": username
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
    }
  }
  
  const response = await API.post(apiName, path, myInit);
  return response;
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

async function listCommanders(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = {
    queryStringParameters: {
      "groupname": 'Installation-Commanders',
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

async function listAuditors(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = {
    queryStringParameters: {
      "groupname": 'SAPRO-Auditors',
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

async function listWorkCenterAdmins(limit) {
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = {
    queryStringParameters: {
      "groupname": 'Work-Center-Admins',
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
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [deletableGroups, setDeletableGroups] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);



  useEffect(() => {
    async function fetchData() {
      const isUserAdmin = await isAdminUser();
      setIsAdmin(isUserAdmin);
      if (isUserAdmin) {
        const fetchedUsers = await listCommanders();
        const fetchedUsers2 = await listAuditors();
        const fetchedUsers3 = await listWorkCenterAdmins();
        const fetchedDeletableGroups = await getDeletableUserGroups();
    
        // Add the 'enabled' property to each user object
        const updatedUsers = fetchedUsers.Users.map(user => ({...user, enabled: user.Enabled}));
        const updatedUsers2 = fetchedUsers2.Users.map(user => ({...user, enabled: user.Enabled}));
        const updatedUsers3 = fetchedUsers3.Users.map(user => ({...user, enabled: user.Enabled}));
    
        setUsers(updatedUsers);
        setUsers2(updatedUsers2);
        setUsers3(updatedUsers3);
        setDeletableGroups(fetchedDeletableGroups);
      }
    }
    fetchData();
  }, []);

  async function handleEnableUser(username) {
    await enableUser(username);
  
    const updatedUsers = users.map(user => {
      if (user.username === username) {
        return {
          ...user,
          enabled: true
        };
      } else {
        return user;
      }
    });
  
    const updatedUsers2 = users2.map(user => {
      if (user.username === username) {
        return {
          ...user,
          enabled: true
        };
      } else {
        return user;
      }
    });
  
    const updatedUsers3 = users3.map(user => {
      if (user.username === username) {
        return {
          ...user,
          enabled: true
        };
      } else {
        return user;
      }
    });
  
    setUsers(updatedUsers);
    setUsers2(updatedUsers2);
    setUsers3(updatedUsers3);
    window.location.reload();
  }

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
  
    const updatedUsers2 = users2.map(user => {
      if (user.username === username) {
        return {
          ...user,
          enabled: false
        };
      } else {
        return user;
      }
    });
  
    const updatedUsers3 = users3.map(user => {
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
    setUsers2(updatedUsers2);
    setUsers3(updatedUsers3);
    window.location.reload();
  }

  if (isAdmin) {
    return (
      <>
        <div className="container">
        <h1>This is the Admin's page</h1>
        </div>
        <div className="container">
        <h2>Installation-Commanders</h2>
        </div>
        <div className="container">
        
        <table style={{ border: '1px solid black', padding: '10px' }}>
          <thead>
            <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Disable User</th>
            <th>Enable User</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.Attributes.email}>
                <td>{user.Username}</td>
                <td>{user.Attributes[2].Value}</td>
                <td>{user.enabled ? 'Enabled' : 'Disabled'}</td>
                <td>
                  <button onClick={() => handleDisableUser(user.Username)}>Disable</button>
                </td>
                <td>
                  <button onClick={() => handleEnableUser(user.Username)}>Enable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="container"><h2>Work-Center-Admins</h2></div>
        
        <div className="container">
        
        <table style={{ border: '1px solid black', padding: '10px' }}>
          <thead>
            <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Disable User</th>
            <th>Enable User</th>
            </tr>
          </thead>
          <tbody>
            {users3.map(user => (
              <tr key={user.Attributes.email}>
                <td>{user.Username}</td>
                <td>{user.Attributes[2].Value}</td>
                <td>{user.enabled ? 'Enabled' : 'Disabled'}</td>
                <td>
                  <button onClick={() => handleDisableUser(user.Username)}>Disable</button>
                </td>
                <td>
                  <button onClick={() => handleEnableUser(user.Username)}>Enable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="container"><h2>SAPRO-Auditors</h2></div>
        <div className="container">
        
    <table style={{ border: '1px solid black', padding: '10px' }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Disable User</th>
              <th>Enable User</th>
            </tr>
          </thead>
          <tbody>
            {users2.map(user => (
              <tr key={user.Attributes.email}>
                <td>{user.Username}</td>
                <td>{user.Attributes[2].Value}</td>
                <td>{user.enabled ? 'Enabled' : 'Disabled'}</td>
                <td>
                  <button onClick={() => handleDisableUser(user.Username)}>Disable</button>
                </td>
                <td>
                  <button onClick={() => handleEnableUser(user.Username)}>Enable</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </>
    );

  } else {
    return (
      <>
        <h1>Sorry! You do not have access to this page!</h1>
        <h2>If you think this is an error, please relax and deal with it.</h2>
        <button onClick={() => listCommanders(5)}>List Editors</button>
      </>
    );
  }
}

export default Admin;
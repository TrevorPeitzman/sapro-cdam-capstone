import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

function Account() {
  const [user, setUser] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    }
    fetchUser();
  }, []);

  async function handleUpdateEmail(event) {
    event.preventDefault();
    try {
      await Auth.updateUserAttributes(user, { email: newEmail });
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating user email:', error);
      setErrorMessage('Error updating email. Please try again.');
    }
  }

  async function handleUpdatePassword(event) {
    event.preventDefault();
    try {
      await Auth.changePassword(user, null, newPassword);
      setErrorMessage('');
    } catch (error) {
      console.error('Error updating user password:', error);
      setErrorMessage('Error updating password. Please try again.');
    }
  }

  async function handleLogout() {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out user:', error);
    }
  }

  async function handleConfirmCode(event) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(user.username, confirmationCode);
      setErrorMessage('');
    } catch (error) {
      console.error('Error confirming code:', error);
      setErrorMessage('Error confirming code. Please try again.');
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account</h1>
      <p>Email: {user.attributes.email}</p>
      <form onSubmit={handleUpdateEmail}>
        <label>
          New email:
          <input type="email" value={newEmail} onChange={event => setNewEmail(event.target.value)} />
        </label>
        <button type="submit">Update email</button>
      </form>
      <form onSubmit={handleUpdatePassword}>
        <label>
          New password:
          <input type="password" value={newPassword} onChange={event => setNewPassword(event.target.value)} />
        </label>
        <button type="submit">Update password</button>
      </form>
      <form onSubmit={handleConfirmCode}>
        <label>
          Confirmation code:
          <input type="text" value={confirmationCode} onChange={event => setConfirmationCode(event.target.value)} />
        </label>
        <button type="submit">Confirm email change</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Account;
/* src/App.js */
// Modified by Trevor Peitzman, USNA '23

import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createChecklist } from './graphql/mutations'
import { listChecklists } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [Checklists, setChecklists] = useState([])

  useEffect(() => {
    fetchChecklists()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchChecklists() {
    try {
      const todoData = await API.graphql(graphqlOperation(listChecklists))
      const Checklists = todoData.data.listChecklists.items
      setChecklists(Checklists)
    } catch (err) { console.log('error fetching Checklists') }
  }

  async function addChecklist() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setChecklists([...Checklists, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createChecklist, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>SAPRO-CDAM Checklists</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addChecklist}>Create New Checklist</button>
      {
        Checklists.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;

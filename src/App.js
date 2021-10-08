import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm'
import {v4 as uuidv4} from 'uuid';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }

  return (
    <div className="container">
      <h1>CRUD APP WITH HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

// video min 26:54
// https://www.youtube.com/watch?v=8rLs-AGn4go&t=1302s
// src\components\AddUserForm.jsx
//  Line 14:9:  'e' is not defined  no-undef

//  Search for the keywords to learn more about each error.
export default App;

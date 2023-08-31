import React, { useState } from 'react';

import UsersList from './components/Users/UsersList';
import NewUser from './components/Users/NewUser';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (newUser) => {
    setUsersList((prevState) => {
      newUser["id"] = Math.random().toString();
      return [
        ...prevState,
        newUser
      ];
    });
  };

  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
      {usersList.length === 0 ? <p>There are no users registered!</p> : <UsersList users={usersList} />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar';
import UserCard from './UserCard';
import Loader from './Loader';

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar onGetUsers={getUsers} />
      {loading ? (
        <Loader />
      ) : (
        <CardGrid>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </CardGrid>
      )}
    </>
  );
};

export default App;

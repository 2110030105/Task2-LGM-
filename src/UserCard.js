import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  width: 200px;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </Card>
  );
};

export default UserCard;

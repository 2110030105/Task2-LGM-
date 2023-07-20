import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
`;

const Navbar = ({ onGetUsers }) => {
  return (
    <NavbarWrapper>
      <BrandName>We Are Here!!</BrandName>
      <button onClick={onGetUsers}>Get Users</button>
    </NavbarWrapper>
  );
};

export default Navbar;

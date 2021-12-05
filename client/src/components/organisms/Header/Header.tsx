import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Header: FC = () => {
  const { signOut } = useAuth();

  return (
    <div>
      <h1> Header</h1>
      <NavLink to="/notes">Notes</NavLink>
      <NavLink to="/todo">ToDos</NavLink>
      <NavLink to="/sides">Sides</NavLink>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
};

export default Header;

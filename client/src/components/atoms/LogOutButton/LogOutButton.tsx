import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

function LogOutButton() {
  const { signOut } = useAuth();
  return (
    <Link to="/notes" className="bg-white w-36 md:w-20 h-8 rounded-lg flex justify-center items-center">
      <button onClick={() => signOut()}>
        <h1 className="text-green-700">LogOut</h1>
      </button>
    </Link>
  );
}

export default LogOutButton;

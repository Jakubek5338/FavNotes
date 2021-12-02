import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function Root() {
  const auth = true;
  return <>{auth ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default Root;

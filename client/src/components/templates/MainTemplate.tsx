import React, { FC } from 'react';
import Header from '../organisms/Header/Header';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default MainLayout;

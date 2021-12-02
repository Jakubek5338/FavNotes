import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { Provider } from 'react-redux';
import store from '../state/store/store';
import GlobalStyle from '../assets/styles/GlobalStyle';

const AppProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;

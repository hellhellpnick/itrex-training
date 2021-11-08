import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Router />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

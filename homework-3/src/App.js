import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Router />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

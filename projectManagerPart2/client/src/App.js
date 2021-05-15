import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div className="container">
        <h1 className="mt-4">Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <CreateAuthor path="/new"/>
        <UpdateAuthor path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;

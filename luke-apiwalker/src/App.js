import {useState} from 'react'
import Search from './components/Search.jsx'
import People from './components/People.jsx'
import Planets from './components/Planets.jsx'
import Species from './components/Species.jsx'
import Starships from './components/Starships.jsx'
import Error from './components/Error.jsx'
import { Router } from '@reach/router';
import './App.css';

function App() {
  const[searchResult, setSearchResult] = useState();
  const data = submittedData => {
    setSearchResult(submittedData);
  }
  return (
    <div >
      <Search data={data}/>
      <Router>
      <People  searchResult={searchResult} path="/people/:id"/>
      <Planets searchResult={searchResult} path="/planets/:id"/>
      <Species searchResult={searchResult} path="/species/:id"/>
      <Starships searchResult={searchResult} path="/starships/:id"/>
      <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;

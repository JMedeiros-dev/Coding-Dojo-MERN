import { Router } from '@reach/router';
import Welcome from './components/Welcome.jsx'
import Word from './components/Word.jsx'
import Color from './components/Color.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Word path="/:input"/>
        <Color path="/:input/:bg/:color" />
      </Router>
    </div>
  );
}

export default App;

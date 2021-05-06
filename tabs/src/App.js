import React, { useState } from 'react';
import Tab from './components/Tab'
import Content from './components/Content'
import TabData from './components/TabData'
import './App.css';




function App() {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <Tab tab={TabData} setContent={setState}  />
      <Content content={state}/>
    </div>
  );
}

export default App;

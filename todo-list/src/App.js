import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list) {
      setList(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);


  return (
    <div>
     <Input list={list} setList={setList} />
     {list.map((task, i) => (
       <Task task={task}  setList={setList} index={i} list={list} />
     ))}
    </div>
  );
}

export default App;

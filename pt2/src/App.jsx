import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import TODOList from "./components/TODOList"
import { v4 as uuid } from "uuid" 

function App() {
  const [todos, setTodos] = useState([
    { title: "Task", id: uuid(), is_completed: false }
  ])
  return (
    <div className="App">
      <Form setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

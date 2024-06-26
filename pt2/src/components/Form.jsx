import { useState } from "react";
import {v4 as uuid} from "uuid";

const Form = ({ setTodos }) => {
  const [fields, setFields] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value
    if (fields["todo"]) {
      setTodos((prev) => [
        ...prev,
        {title: value, id: uuid(), is_completed: false }
      ])
      e.target.reset();
      setFields({})
    } else {
      alert("Напишите задание")
    }
   
  }

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value
    })
  }
    
  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo">
        <input 
          type="text"
          name="todo"
          id="todo"
          placeholder="Новое задание"
          onChange={e => handleChange("todo", e.target.value)}
          value={fields["todo"]}
        />
      </label>
      <button>Добавить</button>
    </form> 
    )
}

export default Form
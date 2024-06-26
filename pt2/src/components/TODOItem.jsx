const TODOItem = ({ item, setTodos }) => {
  
  const handleDelete = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== item.id))
  }
  
  const complete = () => {
    setTodos((prev) => 
      prev.map((todo) =>
          todo.id === item.id
            ? {...todo, is_completed: !todo.is_completed}
            : todo
      )
    )
  }
  return (
    <li id={item?.id} className="todo_item">
      <div className="todo_items_left">
        <button
          onClick={complete} 
          className= {`completion_mark ${item?.is_completed ? "completed":""}`} 
          >
        </button>
        <p className="todo_text">{item?.title}</p>
      </div>
      
      <div className="todo_items_right">
        <button onClick={handleDelete}>
          <span className="">Delete</span>
        </button>
      </div>
    </li>
  )
} 

export default TODOItem;
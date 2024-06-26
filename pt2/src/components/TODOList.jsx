import TODOItem from "./TODOItem"

const TODOList = ({ todos, setTodos }) => {
  return (
  <ol className="todo_list">
    {todos && todos.length > 0 ? (
      todos?.map((item, index) => 
        <TODOItem key={index} item={item} setTodos={setTodos}/>
      )) : (
        <p>Добавьте задание</p>
      )}
  </ol>
  )
}

export default TODOList;
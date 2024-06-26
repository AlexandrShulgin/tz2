import { useEffect } from "react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data)
      })
  }, [])

  return (
    <div className="UserList">
      {users.map((user) => {
        return (
          <div key={user.id} className="UserList_item">
            <p>{user.name}</p>
            <Link to={`/users/${user.id}`} state={user} className="UserList_item_link">Открыть профиль</Link>
          </div>
      )})}
    </div>
  )
}

export default UserList;
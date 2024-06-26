import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const UserProfile = (props) => {
  const { state } = useLocation()
  return (
    <div className="UserProfile">
      <p>Имя: {state.name}</p>
      <p>Номер: {state.phone}</p>
      <p>Email: {state.email}</p>
      <p>Адрес: {state.address.city}</p>
      <p>Работа: {state.company.name}</p>
    </div>
  )
}

export default UserProfile
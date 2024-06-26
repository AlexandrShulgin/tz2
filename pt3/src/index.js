import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom"
import UserList from './routes/UserList';
import UserProfile from './routes/UserProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={UserList}/>
        <Route path='/users/:id' Component={UserProfile}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

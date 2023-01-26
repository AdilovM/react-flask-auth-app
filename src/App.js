import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from 'axios';

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState({})
  const userId = localStorage.getItem('logged in id')
  const userName = localStorage.getItem('logged in name')
  const userEmail = localStorage.getItem('useremail')

  const NotFound = () => {
    return (
      <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/login'>Log in</Link>
            <br></br>
            <Link to='/signup'>Create a new account</Link>
        </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login setUser={setUser}/>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
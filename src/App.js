import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react'
function App() {
  const [profileData, setProfileDatga] = useState(null);

  function getData() {
    axios({
      method: 'GET',
      url: '/profile'
    }).then((response) => {
      const res = response.data
      console.log(res)
      setProfileDatga(({
        profile_name: res.name,
        about: res.about
      })).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>To get the profile details: </p>
        <button onClick={getData}>Click me</button>
        {
          profileData && <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About: {profileData.about}</p>
          </div>
        }
      </header>
    </div>
  );
}

export default App;

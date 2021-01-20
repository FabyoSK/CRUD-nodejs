import React,{useEffect, useState} from 'react'
import './App.css';
import api from "./services/api";
function App() {    
  const [users, setUsers] = useState([])
  useEffect(() => {
      api.get('users').then(response => {
        setUsers(response.data)
        console.log(response.data)
      })
    }, [])

  return (
    users.map(user => <p>{user}</p>)
  )
}

export default App;

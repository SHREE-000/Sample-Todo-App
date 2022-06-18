import React, { useRef,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react"
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate() 

    const usernameFunction =  (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    const userpasswordFunction = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const submitFunction = (event) => {
        event.preventDefault()
        if (username == "admin" && password == 12345) {
            navigate('/todolist')
        }
    }

  return (
    <div className="container w-25 mt-5">
        
        <form>
  <div className="mb-3">
    <label className="form-label">Username</label>
    <input type="text" className="form-control"
    onChange={usernameFunction} />
  </div>
  <div class="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" 
    onChange={userpasswordFunction} />
  </div>
  <button type="submit" className="btn btn-primary" 
  onClick={submitFunction} >Submit</button>
</form>

    </div>
  )
}
export default Login;

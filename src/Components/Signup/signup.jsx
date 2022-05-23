import React from 'react'
import  "./signup.css"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../Context/auth-context"


function Signup() {
    const {SignUpHandler}=useAuth()
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [checked,setChecked]=useState(false)
    const inputChange=(e)=>{
        setEmail(e.target.value)

    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const checkChange=(e)=>{
        setChecked(e.target.value)
       console.log(e)
    }
   

  return (
    <div> <div class="wrapper-signup">
    <div class='Login'>
        <h2>Signup</h2>
        <form class='Login-form'>
            <div class='login-form-input'>
                <label for="username">Username</label>
                <input value={email} onChange={inputChange} id='username' type="text" class='form-inp' placeholder='username@gmail.com' />
            </div>
            <div class='login-form-input'>
                <label for="password">Password</label>
                <input  value={password} onChange={passwordChange}id='password' type="text" class='form-inp' placeholder='********' />
            </div>
            <button onClick={(event) => {
              event.preventDefault();
              console.log("cvkfdl")
              SignUpHandler({ email: email, password: password })}} type='submit' class='button-container-button primary-button'>Create New Account</button>
        </form>
    </div>
</div>
</div>
  )
}

export default Signup
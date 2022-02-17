import React, { useState } from 'react'
import UserInfo from '../models/UserInfo'
import wireGuardService from '../services/WireGuardService'

const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const UserNameChangeHandler = (e) =>{
        setUserName(e.target.value)
    }

    const PasswordChangeHandler = (e) =>{
        setPassword(e.target.value)
    }
    
    const LoginHandler = (e)=>{
        e.preventDefault();
        const user = new UserInfo(userName, password)
        const res = wireGuardService.addNewUser(user)
        console.log(res)
    }

    return (
    <form onSubmit={LoginHandler}>
        <label>
            User Name
        </label>
        <input type='text' onChange={UserNameChangeHandler}/> <br/>
        <label>
            Password
        </label>
        <input type="password" onChange={PasswordChangeHandler}/><br/>
        <button type='submit'> Add User </button>
    </form>
  )
}

export default LoginForm
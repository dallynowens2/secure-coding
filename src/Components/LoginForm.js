import React, { useState } from 'react'
import UserInfo from '../models/UserInfo'
import wireGuardService from '../services/WireGuardService'
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
const cookies2 = new Cookies();
    

const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userIsValid, setUserIsValid] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    
    const checkUserName = () =>{
        if (userName.trim().length >= 4 && userName.trim().length <= 20 && !userName.includes(" ")){
            setUserIsValid(true);
        }
        else{
            setPassword(false);
        }
    }

    const UserNameChangeHandler = (e) =>{
        setUserName(e.target.value)
        checkUserName();
    }

    const PasswordChangeHandler = (e) =>{
        cookies2.set('My cookie', 'I wrote this here', {  path: '/',  maxAge: 300000, httpOnly: 'false', sameSite: 'lax',});
        setPassword(e.target.value)
    }
    
    const LoginHandler = (e)=>{
        e.preventDefault();
        if (userIsValid){
            const user = new UserInfo(userName, password)
            user.password = "hello"
            const res = wireGuardService.addNewUser(user)
        }
        
        
       
    }

    return (
    <form onSubmit={LoginHandler}>
        <h1>Welcome!</h1>
        <label>
            User Name
        </label>
        <input type='text' onChange={UserNameChangeHandler}/> <br/>
        <label>
            Password
        </label>
        <input type="password" onChange={PasswordChangeHandler}/><br/>
        <button type='submit'> Login </button>
    </form>
  )
}

export default LoginForm
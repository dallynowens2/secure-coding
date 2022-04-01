import React, {useEffect, useState} from "react";
import wireGuardService from "../services/WireGuardService";
import { useAuth0 } from "@auth0/auth0-react";
import UserModel from "../models/UserModel";

function User() {
  const [topping, setTopping] = useState("")
  const [icecream, setIcecream] = useState("")
  const [visit, setVisit] = useState("")
  const [nickname, setNickname] = useState("")
  const [token, setToken] = useState("")
  const { user, getAccessTokenSilently } = useAuth0();
  const [curUser, setCurUser] = useState()
  
   useEffect(() => {
     
     (async () => {
         try {
             const token = await getAccessTokenSilently({
               audience: 'https://secure/api',
               scope: 'read:userInfo, post:userInfo',
             });
             setToken(token)
     }catch (e) {
         console.error(e);
       }
        
     })();
     setCurUser(wireGuardService.getUserInfo(user.email))
   }, [])

  const toppingChangeHandler = (e) =>{
    setTopping(e.target.value);
  }

  const icecreamChangeHandler = (e) =>{
    setIcecream(e.target.value);
  }

  const visitChangeHandler = (e) =>{
    setVisit(e.target.value);
  }

  const nicknameChangeHandler = (e) =>{
    setNickname(e.target.value);
  }
  
  const submitHandler = (e) =>{
    e.preventDefault();
    const newUserModel = new UserModel(
      user.email,
      topping,
      icecream,
      visit,
      nickname
    )

    wireGuardService.postUserInfo(newUserModel, token);
  }

  return (
    <form onSubmit={submitHandler} >
      <h1>Hello {user.name} </h1>
      <label>Favorite Pizza topping</label>
      <input type="text" onChange={toppingChangeHandler} /> <br />
      <label>Favorite Icecreame Flavor</label>
      <input type="text" onChange={icecreamChangeHandler} />
      <br />
      <label>Place you want to vist</label>
      <input type="text" onChange={visitChangeHandler} /> <br />
      <label>nickname</label>
      <input type="text" onChange={nicknameChangeHandler}/>
      <br />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default User;

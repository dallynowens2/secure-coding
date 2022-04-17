import React, { useEffect, useState } from "react";
import wireGuardService from "../services/WireGuardService";
import { useAuth0 } from "@auth0/auth0-react";
import UserModel from "../models/UserModel";

function User() {
  const [topping, setTopping] = useState("");
  const [icecream, setIcecream] = useState("");
  const [visit, setVisit] = useState("");
  const [nickname, setNickname] = useState("");
  const [token, setToken] = useState("");
  const { user, getAccessTokenSilently } = useAuth0();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [curUser, setCurUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://secure/api",
          scope: "read:userInfo, post:userInfo",
        });
        setToken(token);
        setCurUser( wireGuardService.getUserInfo(user.email, token));
      } catch (e) {
        console.error(e);
      }
    })(); 
  }, []);

  const fileUploadChangeHandler = (e) => {
    if (
      e.target.files[0].size < 500000 &&
      (e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png")
    ) {
      setSelectedFile(e.target.files[0]);
      setIsFilePicked(true);
    }
    else{
      console.log("file not good")
    }
  };

  const toppingChangeHandler = (e) => {
    setTopping(e.target.value);
  };

  const icecreamChangeHandler = (e) => {
    setIcecream(e.target.value);
  };

  const visitChangeHandler = (e) => {
    setVisit(e.target.value);
  };

  const nicknameChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isFilePicked ) {
      const newUserModel = new UserModel(
        user.email,
        topping,
        icecream,
        visit,
        nickname,
        selectedFile
      );
      wireGuardService.postUserInfo(newUserModel, token);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Hello {user.name} </h1>
      <label>Favorite Pizza topping</label>
      <input type="text" onChange={toppingChangeHandler} /> <br />
      <label>Favorite Icecreame Flavor</label>
      <input type="text" onChange={icecreamChangeHandler} />
      <br />
      <label>Place you want to vist</label>
      <input type="text" onChange={visitChangeHandler} /> <br />
      <label>nickname</label>
      <input type="text" onChange={nicknameChangeHandler} />
      <br />
      <label>Upload Profile Picture</label>
      <input type="file" accept="image/*" onChange={fileUploadChangeHandler} />
      <br />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default User;

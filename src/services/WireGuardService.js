import axios from "axios";
import WireGuardInfo from "../models/WireGuardInfo";
import UserInfo from "../models/UserInfo";
const url = "https://localhost:44386/api/wireguard";
const url2 = "https://dallyndev.duckdns.org/api/UserModel";

const getWireGuardInfo = async () => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const addNewUser = async (user) => {
  if (!user.userName) {
  }
  if (user.password.length() < 8) {
  }
  const res = await axios.post(url2, user);
  return res.data;
};

const getUserInfo = async (user, token) => {
  const res = await axios.get(url2, user.userName, {
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const postUserInfo = async (user, token) => {
  console.log(token);
  const res = await axios.post(url2, user, {
    headers: {
      authorization: `Bearer ${token}`
    },
  });
  console.log(res)
  return res.data;
};

const wireGuardService = {
  getWireGuardInfo,
  addNewUser,
  getUserInfo,
  postUserInfo,
};

export default wireGuardService;

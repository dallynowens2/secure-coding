import axios from "axios";
import WireGuardInfo from "../models/WireGuardInfo";
import UserInfo from "../models/UserInfo";
const url = 'https://localhost:44386/api/wireguard'
const url2 = 'https://localhost:44386/api/User'

const getWireGuardInfo = async () =>{
    const res = await axios.get(url);
    console.log(res.data)
    return res.data
}

const addNewUser = async (user) =>{
    const res = await axios.post(url2,user)
    return res.data
}

const wireGuardService ={
    getWireGuardInfo,
    addNewUser
}

export default wireGuardService
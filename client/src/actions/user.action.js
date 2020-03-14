import { ServerURL } from "../constants/constants"
import Axios from "axios";
import SessionStorage from "../utils/localStorage";

export const LoginUser = async (email,password) => {

    const request = `${ServerURL}/user/login`;
    const response = await Axios.post(request,{email,password})
     return { type : "USER_LOGIN", payload : response.data}
       
}

export const isAuth = async () => {
    let token = SessionStorage.get("token");
    const request = `${ServerURL}/user/isAuth?token=${token}`;
    const response = await Axios.get(request);
    return {type:"IS_AUTH", payload:response.data}
}

export const getUserPosts= async (userId) => {
    const request = `${ServerURL}/user/userposts?id=${userId}`;
    const response = await Axios.get(request);
    if(response.data.success){
        return {type:"GET_USERPOSTS", payload:response.data.data}
    }
}

export const getAllUsers = async () => {
    const request = `${ServerURL}/user/getusers`;
    const response = await Axios.get(request);
    if(response.data.success){
        return {type:"GET_ALL_USERS",payload:response.data.data}
    }
    else
        return {type:"GET_ALL_USERS",payload:null}
}

export const PostUser = async (user,userList) => {
    const request = `${ServerURL}/user/register`
    const response = await Axios.post(request,user);
    return {type:'ADD_USER',payload:response.data.success}
}


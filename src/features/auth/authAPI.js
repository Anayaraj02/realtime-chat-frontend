import { API } from "../../service/api";

export const loginUser=async(Credentials)=>{
    const response= await API.post("/auth/login",Credentials);
    console.log(response,"response");
    
    return response.data;
}

export const registerUser=async(UserData)=>{
    const response = await API.post("/auth/register",UserData);
    return response.data;
}
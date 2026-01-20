import axios from 'axios'

//! Base URL 
const api = axios.create({
    baseURL: "http://localhost:3005",
    withCredentials: true
})

//* Resgistration
export const registrationPost = (data) => {
    return api.post("/register",data)
}

//* Login
export const  loginPost = (data)=>{
    return api.post("/login", data)
}

//* update profile
export const updateProfile = (data, id)=>{
    return api.post(`/updateprofile/${id}`, data);
}

// 
export const getHomePageData = ()=>{
    return api.get("chat",{withCredentials: true})
}

//! logoout user

export const logoutUser = ()=>{
    return api.get("/logout", {withCredentials: true})
}
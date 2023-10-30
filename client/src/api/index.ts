import axios from "axios";
import { FieldValues } from "react-hook-form";

const token = sessionStorage.getItem("access_token")

const api = axios.create({ baseURL: import.meta.env.VITE_SERVER_URL,headers:{
    Authorization: `Bearer ${token}`
} });

export const login = async(data:FieldValues)=>{
    const response = await api.post(`/auth/login`,data)
    return response.data
}

export const logout = async()=>{
    sessionStorage.clear();
    window.location.replace("/login")
    return 
}

export const signup = async(data:FieldValues)=>{
    const res = await api.post(`/auth/signup`,data)
    return res.data
}

export const verify = async(token:string)=>{
    const response = await api.post(`/auth/verify?type=verify`,{},{
        headers:{
            Authorization:token
        }
    })
    return response.data
}

export const getItems = async()=>{
    const res  = await api.get(`/items`)
    return res.data
}

export const createItem = async(data:FieldValues)=>{
    try{
        const res = await api.post(`/items/create`,data)
        return res.data
    }
    catch(err){
        console.log(`${err}`)
    }
}

export const addBid  = async(data:FieldValues,id:string)=>{
    try{
        data.item_id = id
        const res = await api.post(`/bids/`,data)
        return res.data
    }
    catch(err){
        console.log(`${err}`)
    }
}

export const getBids = async(id:string)=>{
    try{
        const res = await api.get(`/bids/${id}`)
        return res.data
    }
    catch(err){
        console.log(`${err}`)
    }
}

export const fetchItemById = async(id:string)=>{
    try{
        const res = await api.get(`/items/${id}`)
        return res.data
    }
    catch(err){
        console.log(`${err}`)
    }
}

export const deleteItem = async(id:string|undefined)=>{
    try{
        const res = await api.delete(`/items/${id}`)
        return res.data
    }
    catch(err){
        console.log(`${err}`)
    }
}
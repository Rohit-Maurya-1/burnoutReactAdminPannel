import axios from "axios";
const token = localStorage.getItem("Token");
let header = {
  headers: {
    authorization: token, 
  },
};
 export const BASE_URI ="http://localhost:8000/"

 export const REGISTER= async(value)=>{
    try {
      let URL= BASE_URI+"register"
      const res= await axios.post(URL,value)
       return res
    } catch (error){
       return error
    }
   } 
   export const LOGIN= async(value)=>{
    try{
    let URL= BASE_URI+"adminLogin"
    const res= await axios.post(URL,value)
    return res
    } catch (error){
      return error
    }
  } 
  
  //===================================Manage user==================
  export const ADDUSER= async(value)=>{
    try {
     let URL= BASE_URI+"userAdd"
     const res= await axios.post(URL,value,header)
     return res
    } catch (error) {
      return error
    }
  } 

  export const GETUSER= async()=>{
    try {
     let URL= BASE_URI+"getUserData"
     const res= await axios.get(URL)
     return res
    } catch (error){
      return error
    }
  } 
  export const UPDATEUSER= async(value,id)=>{
    try {
     let URL= BASE_URI+`userUpdate/${id}`
     const res= await axios.put(URL,value)
     return res
    } catch (error){
      return error
    }
  } 
 
  export const DELETEUSER= async(id)=>{
    try {
     let URL= BASE_URI+`userDelete/${id}`
     const res= await axios.delete(URL)
     return res
    } catch (error){
      return error
    }
  } 
 
   export const ADDBUSINESS=async(formData)=>{
    try {
     let URL= BASE_URI+"addBusiness"
     const res= await axios.post(URL,formData)
      return res
    } catch (error){
      return error
    }
  } 
  export const GETBUSINESS=async()=>{
    try {
     let URL= BASE_URI+"getBusinessDetails"
     const res= await axios.get(URL)
     return res
    } catch (error){
      return error
    }
  } 
    export const UPDATEBUSINESS=async()=>{
     try {
     let URL= BASE_URI+"UpdateBusinessDetails"
     const res= await axios.get(URL)
      return res
    } catch (error){
      return error
    }
  } 

  export const SEARCHDATA= async(key)=>{
    try {
     let URL= BASE_URI+`searchAllData/${key}`
     const res= await axios.get(URL)
     return res
    } catch (error){
      return error
    }
  } 
  //=================manage rating==========================
  export const GETRATING=async()=>{
    try {
     let URL= BASE_URI+"getRating"
     const res= await axios.get(URL)
     return res
    } catch (error){
      return error
    }
  } 
  export const FORGOTPASSWORD=async(value)=>{
    try {
     let URL= BASE_URI+"forgotPassword"
     const res= await axios.post(URL,value)
     return res
    } catch (error){
      return error
    }
  } 

  export const VERIFYOTP=async(value)=>{
    try {
     let URL= BASE_URI+"verifyOtp"
     const res= await axios.post(URL,value)
     return res
    } catch (error){
      return error
    }
  }


  export const RESETPASSWORD=async(value)=>{
    try {
     let URL= BASE_URI+"resetPassword"
     const res= await axios.post(URL,value)
     return res
    } catch (error){
      return error
    }
  }

  export const GETDETAILS = async(page=1,limit=2) => {
    try {
      let URL =BASE_URI+"pagination"
      const res= await axios.get(URL,{
        params: {
        page: page,
        limit: limit, // Number of items per page
      }
    },)
      return res
    }
    catch(error){
      console.log(error)
      return error
    }
  }

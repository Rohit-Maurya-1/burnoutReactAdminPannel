import React,{createContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {Routes,Route} from "react-router-dom";
import Login from "./component/Pages/Login/Login";
import Register from "./component/Pages/Register";
import ForgotPassword from "./component/Pages/Login/ForgotPassword";
import Manageuser from "./component/Pages/Manageuser/Manageuser.js";
import BusinessList from "./component/Pages/Business/BusinessListing/BusinessList";
import BusinessProfile from "./component/Pages/Business/BusinessListing/BussinessProfile";
import ManageCatgory from "./component/Pages/ManageCatgory/ManageCatgory";
import ManagefeaturedBusiness from "./component/Pages/ManagefeatureBusiness/ManagefeatureBusiness";
import ManageRating from "./component/Pages/ManageRating/ManageRating";
import ManageNotification from "./component/Pages/ManageNotification/ManageNotification";
import ManageUserProfile from "./component/Pages/Manageuser/ManageUserProfile";
import {Provider}from "react-redux";
import store from "./store/Store"
import AddServices from "./component/Pages/services/AddServices";
import VerifyOtp from "./component/Pages/Login/VerifyOtp";
import ResetPassword from "./component/Pages/Login/ResetPassword";
import PrivateRoutes from "./component/Services/Authentication";
function App() {
return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        {/* <Route path="/" element={<Register/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/forgotPassword"element={<ForgotPassword/>}/>
        <Route path="/VerifyOtp"element={<VerifyOtp/>}/>
        <Route path="/ResetPassword"element={<ResetPassword/>}/>
          {/*======================= private route========================= */}
          <Route exact element={<PrivateRoutes/>}>
          <Route path="/manageuser"element={<Manageuser/>}/>
         <Route path="/ManageUserProfile/:id"element={<ManageUserProfile/>}/>
        <Route path="/BusinessList"element={<BusinessList/>}/>
        <Route path="/BusinessProfile/:id"element={<BusinessProfile/>}/>
        <Route path="/ManageCatgory"element={<ManageCatgory/>}/>
        <Route path="/ManagefeaturedBusiness"element={<ManagefeaturedBusiness/>}/>
        <Route path="/ManageRating"element={<ManageRating/>}/>
        <Route path="/ManageNotification"element={<ManageNotification/>}/>
        {localStorage.getItem("Token")&& localStorage.getItem("Role")==="admin"&&
            <Route path="/AddServices"element={<AddServices/>}/>
        }
        </Route>
       </Routes>
      </Provider>
      </div>
         
  )     
  }
export default App;



import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login/Style.css";
import { REGISTER } from "../Api/ApiIntigretion";
import logo from "../assets/burn.jpg";
import { Link, useNavigate } from "react-router-dom";

const Register =()=>{
const navigate= useNavigate()
const [values,setValues]=useState({
    username:"",
    email:"",
    password:''
  })
 const handleChange=(e)=>{
     const {name,value}=e.target
     setValues({
       ...values,
       [name]:value
     })
    }
   const handleSubmit=async (e)=>{
      e.preventDefault();
         try {
          const data=await REGISTER(values);
          console.log(data);
          if(data.status===200){
            localStorage.setItem("Token",data.data.Response.token)
            navigate("/login")
          }else{
           toast.error("email already exist")
         }
         } catch (error) {
          toast.error("internal server error!")
         }
        } 
       return (
      <>
      <div className="main-wrapper-login">
        <div className="Login-wrapper">
          <div className="login-wrap-logo text-center mb-5">
            <img
              src={logo}
              alt="Logo"
              width="210px"
              style={{borderRadius:"50%",height:"210px"}}
            />
          </div>
          <div className="loginbody--form">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12">
                  <Form.Control
                    type="userName"
                    className="input-login-control mb-4"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="12">
                  <Form.Control
                    type="email"
                    className="input-login-control mb-4"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                   
                  />
                </Col>
                <Col xs="12">
                  <Form.Control
                    type="password"
                    className="input-login-control mb-4"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="6">
                  <div className="remember-me mb-5">
                    <span>
                      <input type="checkbox" />
                      <label className="ms-2 cursor-pointer">Remember Me</label>
                    </span>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="forgot--txtlink text-end mb-5">
                   <Link to="/forgotPassword" className="link-forgot cursor-pointer">
                      Forgot password?</Link>
                  
                  </div>
                </Col>
                <Col xs="12">
                  <div className="login-login">
                    <button 
                      type="submit"
                      className="btn btn-login cursor-pointer"
                    >
                      Register
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default Register;

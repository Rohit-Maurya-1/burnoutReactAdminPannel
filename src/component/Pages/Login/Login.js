import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from 'react-google-login';
import { Row, Col, Form } from "react-bootstrap";
import { LOGIN } from "../../Api/ApiIntigretion";
import {useNavigate } from "react-router-dom";
import "./Style.css";
import logo from"../../assets/burn.jpg"
 
const Login=()=>{
 const navigate= useNavigate()
  const [values,setValues]=useState({
    email:"",
    password:""
  })
 const handleChange=(e)=>{
     const {name,value}=e.target
      setValues({
       ...values,
       [name]:value
     })
    }
   const handleSubmit= async(e)=>{
      e.preventDefault();
        const data=await LOGIN(values);
         if(data.status===200){
          localStorage.setItem("Token",data.data.Response.token)
          localStorage.setItem("Role",data.data.Response.role)
          navigate("/manageuser")
        }
        else{
         toast.error("invalid email")
       }
        }
   
     const responseSuccessGoogle = (response) => {
      console.log(response);
    }
    const responseErrorGoogle=(error)=>{
     console.log(error);
    }

 return (
    <>
      <div className="main-wrapper-login">
        <div className="Login-wrapper">
          <div className="login-wrap-logo text-center mb-5">
          <img src={logo} alt="Logo" width="210px"style={{borderRadius:"50%",height:"210px"}}/>
          </div>
          <div className="loginbody--form">
            <Form onSubmit={handleSubmit}>
              <Row>
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
                      <input type="checkbox"/>
                      <label className="ms-2 cursor-pointer">Remember Me</label>
                    </span>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="forgot--txtlink text-end mb-5">
                    <span
                      className="link-forgot cursor-pointer"
                       >
                      Forgot password?
                    </span>
                  </div>
                </Col>
                <Col xs="12">
                  <div className="login-login">
                    <button
                      type="submit"
                      className="btn btn-login cursor-pointer"
                    > Login
                    </button>
                    <div class="google-btn" style={{display:"flex",justifyContent:"flex-end"}}>
                  </div>
                  </div>
                </Col>
              </Row>
              </Form>
              <GoogleLogin
           clientId="959357450257-at2n4tms35pah5qlin266iclbj5ick3u.apps.googleusercontent.com"
           buttonText=" Google Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
          />
          </div>
        </div>
        {/* <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" /> */}
        <ToastContainer/>
      </div>
    </>
  );
}
export default Login;

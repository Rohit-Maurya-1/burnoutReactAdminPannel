import React  from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useSearchParams,useNavigate } from "react-router-dom";
import {VERIFYOTP} from "../../Api/ApiIntigretion"
import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";
const VerifyOtp=()=>{
  const params= useSearchParams() 
  const navigate= useNavigate();
  
  const [values,setValues]=useState({
    email:"",
    otp:""
  })

  useEffect(() => {
    setValues({ ...values, email: params[0].get("email")});
    console.log(values);
  },[]);
  const handleChange=(e)=>{
  const {name,value}=e.target
   setValues({
    ...values,
    [name]:value
   })
  }
 const handleSubmit= async(e)=>{
    const { email } = values;
   e.preventDefault()
   const data= await VERIFYOTP(values)
   if(data.status===200){
    navigate("/ResetPassword?email="+email)
   }
   else{
    toast.error("user not found")
   }
  }
  return (
    <>
      <div className="main-wrapper-login">
        <div className="Login-wrapper py-5">
          <div className="forgt-txt-head text-center mb-5">
            <h1>Enter the otp</h1>
            <p>
             Please check the mail id...🔥😒
            </p>
          </div>
          <div className="loginbody--form">
            <Form onSubmit={handleSubmit} >
              <Row>
                <Col xs="12">
                  <Form.Control
                    type="email"
                    name="email"
                    value={values?.email}
                    onChange={handleChange}
                    className="input-login-control mb-4"
                    placeholder="johndoe@gmail.com"
                   />
                </Col>
                <Col xs="12">
                  <Form.Control
                    type="otp"
                    name="otp"
                    onChange={handleChange}
                    className="input-login-control mb-4"
                    placeholder="Enter otp "
                   />
                </Col>
                <Col xs="12">
                  <div className="login-login">
                    <button type="submit" className="btn btn-login">
                      Continue
                    </button>
                  </div>
                </Col>
                <Col xs="12">
                  <div className="login-back-btn text-center mt-5">
                    <Link
                      href="#"
                      className="btn btn-login-back"
                      >
                      Back to Login
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}
export default VerifyOtp;

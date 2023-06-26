import React  from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link, useSearchParams,useNavigate } from "react-router-dom";
import "./Style.css";
import { useState } from "react";
import { RESETPASSWORD } from "../../Api/ApiIntigretion";
import { useEffect } from "react";
const ResetPassword=()=>{
  const navigate= useNavigate()
  const params= useSearchParams()
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
  useEffect(() =>{
    setValues({ ...values, email: params[0].get("email")});
    },[]);
 const handleSubmit= async(e)=>{
  e.preventDefault()
  const data= await RESETPASSWORD(values)
   if(data){
    navigate("/login")
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
            <Form  onSubmit={handleSubmit}>
              <Row>
                <Col xs="12">
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="input-login-control mb-4"
                    placeholder="johndoe@gmail.com"
                   />
                </Col>
                <Col xs="12">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="input-login-control mb-4"
                    placeholder="password"
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
      </div>
    </>
  );
}
export default ResetPassword;

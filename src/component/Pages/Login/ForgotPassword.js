import React, { useState }  from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate,useParams } from "react-router-dom";
import "./Style.css";
import { FORGOTPASSWORD } from "../../Api/ApiIntigretion";
const ForgotPassword=()=>{
  const navigate = useNavigate()
  
  const [values,setValues]=useState({
    email:"",
    })
    const { email } = values;
   const handleInput=(e)=>{
     const {name,value}=e.target
     setValues({
      ...values,
      [name]:value
     })
     
   } 
  const handleSubmit= async(e)=>{
   e.preventDefault();
   const data = await FORGOTPASSWORD(values)
    if(data.status===200){
        navigate("/VerifyOtp?email="+email)
     }
    else
     toast.error("user not found")

  }
  return (
    <>
      <div className="main-wrapper-login">
        <div className="Login-wrapper py-5">
          <div className="forgt-txt-head text-center mb-5">
            <h1>Forgot Password</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
          </div>
          <div className="loginbody--form">
            <Form  onSubmit={handleSubmit}>
           <Row>
                <Col xs="12">
                  <Form.Control
                    type="email"
                    onChange={handleInput}
                    name="email"
                    className="input-login-control mb-4"
                    placeholder="johndoe@gmail.com"
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
export default ForgotPassword;

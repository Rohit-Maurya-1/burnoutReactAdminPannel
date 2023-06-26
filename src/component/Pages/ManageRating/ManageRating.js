import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import{GETRATING}from "../../Api/ApiIntigretion"
import Header from "../../Header/Header";
import "./style.css";
import BusinessImg from "../../assets/burn.jpg";
import Rating from "./Rating";

function ManageRating() {
  const [getRating,setGetRating]=useState([])

  useEffect(()=>{
    rating()
  },[])
  const rating= async()=>{
    const  res= await GETRATING()
    setGetRating(res?.data?.response);
 }
  return(
        <>
            <Header />
            <div className="main-manage--wrapp">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <div className="main--tablecard">
                                <div className="card-header-main">
                                    <h2 className="heading-items-prod">Manage Rating</h2>
                                </div>
                                { getRating.map((data)=>{
                                    return(
                                  <div className="business-card-fit">
                                    <div className="manage--txtcontent">                                        
                                        <div className="manage--wrap-rating">
                                            <div className="multi-manageview--rat">
                                                <div className="mng-leftside-rating">
                                                    <div className="manage-fleximg--grid">
                                                        <img src={`http://localhost:8000/uploads/${data?.profile}`} alt="" />
                                                    </div>
                                                    <div className="manage-rating-content-wrap">
                                                        <div className="manage-ratingrow--content">
                                                            <div className="manage-righttxt--head">
                                                                <h3 className="manage-head-ratingview">{data?.businessName}</h3>
                                                                <span className="manage-categ-rating">{data?.discription}</span>
                                                            </div>
                                                            <div className="manage-multiIcon--start">
                                                                <Rating  value={data?.rating} />
                                                                
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>                                                 
                                                <div className="right-closebtn">
                                                    <span><button type="button" className="btn btnclose"><i class="fal fa-times"></i></button></span>
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </div>                                                                        
                                </div>
                                    )
                                 })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default ManageRating;
import React,{useEffect, useState} from "react";
import { Container, Row, Col ,Form,Modal } from "react-bootstrap";
import Header from "../../../Header/Header";
import {GETBUSINESS} from "../../../Api/ApiIntigretion"
import "./style.css";
import Busimg from "../../../assets/burn.jpg";
import {useParams} from "react-router-dom";
function MyVerticallyCenteredModal(props){
     const[imagePath,setImagePath]=useState("")
     const[values,setValues]=useState({
      businessName:"",
      address:"",
      emailAddress: "",
      phoneNumber: "",
      availableHours: "",
      websiteLink: "",
      profilePic: "",
    });
    const handleChange = (e) => {
      const { name,value} = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleImageChange = (e) =>{
          setValues({...values,profilePic:e.target.files[0]})
          setImagePath(URL.createObjectURL(e.target.files[0]));
        };
     
  const handleFormSubmit=()=>{
      
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > <Modal.Header closeButton className="modal--header">
          <Modal.Title id="contained-modal-title-vcenter">
            Update Business
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 pb-5 pt-0">
          <div className="notifi--wraper-body">
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      name="businessName"
                      type="text"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Business Name"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Address"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      name="emailAddress"
                      type="email"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Email Address"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Phone Number"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="availableHours"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Available Hours"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="websiteLink"
                      onChange={handleChange}
                      className="form-control input-control-noti"
                      placeholder="Website link"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div className="business-row-verifi">
                    <label class="uplaod-img-label">
                      Upload document for verification
                    </label>
                    <div className="image-productlist-main">
                      <ul class="image-forwig--thumproduct">
                        <li className="listmulti-thumb addimg--wigrt">
                          <label htmlFor="file" style={{ color: "white" }}>
                            <i className="fal fa-plus"></i>
                          </label>
                          <input
                            type="file"
                            id="file"
                            name="profilePic"
                            onChange={handleImageChange}
                            style={{ visibility: "hidden" }}
                          />
                        </li>
                        <li className="listmulti-thumb">
                          <div className="multiImage--thum-wig">
                            <div className="imagethumb--items">
                              <img src={imagePath} alt=""/>
                            </div>
                            <span className="delt-itemimage-thumb">
                              <button type="button" className="btn btn-img-del">
                                <i class="fal fa-times"></i>
                              </button>
                            </span>
                          </div>
                        </li>
                        <li className="listmulti-thumb">
                          <div className="multiImage--thum-wig">
                            <div className="imagethumb--items">
                              <img src={Busimg} alt="" />
                            </div>
                            <span className="delt-itemimage-thumb">
                              <button type="button" className="btn btn-img-del">
                                <i class="fal fa-times"></i>
                              </button>
                            </span>
                          </div>
                        </li>
                        <li className="listmulti-thumb">
                          <div className="multiImage--thum-wig">
                            <div className="imagethumb--items">
                              <img src={Busimg} alt="" />
                            </div>
                            <span className="delt-itemimage-thumb">
                              <button type="button" className="btn btn-img-del">
                                <i class="fal fa-times"></i>
                              </button>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="form-group">
                    <button type="submit" className="btn btnSend-notifi">
                      Add
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
      </Modal>
    );
  }


const  BusinessProfile=()=> {
  const [modalShow, setModalShow] =useState();
  const [getDataID,setGetDataID]=useState([])
  const [imagePath,setImagePath]=useState("")
  const {id}=useParams()
  useEffect(()=>{
  getItem()
  },[])
 
  const getItem = async()=>{
  const getData = await GETBUSINESS();
  let getId = getData.data.response;
  const newData = getId.find((item)=>{
    return item._id===id;
  });
    setImagePath(process.env.REACT_APP_IMAGE_PATH+newData.profile)
    setGetDataID(newData);
};
   return (
    <>
      <Header/>
      <div className="main-manage--wrapp">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="main--tablecard">
                <div className="card-header-main">
                  <h2 className="heading-items-prod">Business details</h2>
                </div>
                <div className="business-card-fit">
                  <Row>
                    <Col lg={6}>
                      <div className="bus--txtcontent">
                        <div className="edit-row text-end">
                          <span>
                            <button type="button" className="btn btn-edit" onClick={()=>setModalShow(true)}>
                              Edit
                            </button>
                          </span>
                        </div>
                        <div className="listprofile--wrap">
                          <div className="flex-listitem--both">
                            <div className="image--flexlist">
                              <img
                                src={imagePath}
                                className="pic-wrap-wig"
                                alt=""
                              />
                            </div>
                            <div className="rightSide--businfo">
                              <h3 className="title--list">{getDataID?.businessName}</h3>
                              <ul className="listmore--info-bis">
                                <li className="info--art-txt">
                                  <span className="fst--listmt">Email Id</span>
                                  <span className="scnd--listmt">
                                    {getDataID?.emailAddress}
                                </span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">Phone No.</span>
                                  <span className="scnd--listmt">
                                      {getDataID?.phoneNumber}
                                  </span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">Distane</span>
                                  <span className="scnd--listmt">4 Km far</span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">
                                    Available Hours
                                  </span>
                                  <span className="scnd--listmt">{getDataID?.availableHours}</span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">
                                    Website link
                                  </span>
                                  <span className="scnd--listmt">
                                    {getDataID?.websiteLink}
                                  </span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">
                                    Subscription Plan
                                  </span>
                                  <span className="scnd--listmt">
                                    290
                                 </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="footerlst--row text-center">
                            <button
                              type="button"
                              className="btn btn-enable me-2"
                            >
                              Enable
                            </button>
                            <button
                              type="button"
                              className="btn btn-disable ms-2"
                            >
                              Disable
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="bus--txtcontent">
                        <div className="rht--itemrow">
                          <h3 className="title-rating">Rating</h3>
                        </div>
                        <div className="rating-main--wrap">
                          <div className="multi-rating--tabview">
                            <div className="fleximg--grid">
                              <img src={getDataID?.businessName} alt="" />
                            </div>
                            <div className="rating-content-wrap">
                              <div className="ratingrow--content">
                                <div className="righttxt--head">
                                  <h3 className="head-ratingview">
                                  {getDataID?.businessName}
                                  </h3>
                                  <span className="categ-rating">George</span>
                                </div>
                                <div className="multiIcon--start">
                                  <span className="startlist-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span className="startlist-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span className="startlist-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span className="startlist-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                                  <span className="startlist-icon">
                                    <i class="fas fa-star"></i>
                                  </span>
                                </div>
                              </div>
                              <p className="txt-rating-review">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy
                              </p>
                            </div>
                          </div>
                          </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          // getAllData={getAllData}
          // setGetAllData={setGetAllData}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}
export default BusinessProfile;

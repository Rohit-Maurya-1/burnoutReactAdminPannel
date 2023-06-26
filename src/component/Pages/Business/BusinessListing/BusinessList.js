import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Modal, Form } from "react-bootstrap";
import Header from "../../../Header/Header";
import "./style.css";
import{ADDBUSINESS,GETBUSINESS}from "../../../Api/ApiIntigretion";
import{useNavigate} from "react-router-dom";
function MyVerticallyCenteredModal(props){
const addData= props.getAllData
  const[imagePath,setImagePath]=useState()
   const[values,setValues]=useState({
    businessName: "",
    address: "",
    emailAddress: "",
    phoneNumber: "",
    availableHours: "",
    websiteLink: "",
    profilePic: [],
  });
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setValues({
      ...values,
      [name]:value,
    });
  };
    const handleImageChange = (e) =>{
          setValues({...values,profilePic:[...values.profilePic,...e.target.files[0]]})
        //   let images=[];
        //   for(let element of e.target.files){
        //   const images=(URL.createObjectURL());
        //  };
       setImagePath(URL.createObjectURL(e.target.files[0]));
     };
    const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageData",values.profilePic.name)
    formData.append("businessName", values.businessName);
    formData.append("address", values.address);
    formData.append("emailAddress", values.emailAddress);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("availableHours", values.availableHours);
    formData.append("websiteLink", values.websiteLink);
     
    const data= await ADDBUSINESS(formData)
      if(data?.data?.response){
     props.setModalShow(false)
     let newData=[...addData,data?.data?.response]
     props.setGetAllData(newData)
      }
      console.log(addData,"addData")
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > <Modal.Header closeButton className="modal--header">
        <Modal.Title id="contained-modal-title-vcenter">
          Add Business
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
              <Col >
                <div className="business-row-verifi">
                  <label class="uplaod-img-label">
                    Upload document for verification
                  </label>
                  <div className="image-productlist-main">
                    <ul class="image-forwig--thumproduct">
                      <li className="listmulti-thumb addimg--wigrt">
                        <label htmlFor="file" style={{ color:"white" }}>
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
                      {/* {imagePath.length?(
                        imagePath.map((image,index)=>
                        <li className="listmulti-thumb" key={index}> */}
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
                      {/* </li>) */}
                      {/* ):""} */}
                      
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
const BusinessList = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] =useState();
  const [getAllData,setGetAllData]=useState([])
      useEffect(()=>{
      getData();
    },[])
      const getData= async()=>{
      const res= await GETBUSINESS()
      if(res?.data?.status === true){
        setGetAllData(res?.data?.response)
        console.log(res,"gg")
      }else{
        console.log("error")
      }
     }
    return(
      <>
      <Header/>
      <div className="main-manage--wrapp">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="main--tablecard">
                <div className="card-header-main">
                  <h3 className="heading-items-prod">Business Listing</h3>
                  <div className="adduser--tab">
                    <button
                      className="btn btn-add"
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Add Business
                    </button>
                  </div>
                </div>
                <div className="table-wraper-body">
                  <div className="search-table-bar">
                    <input
                      type="text"
                      class="form-control search-txt-control"
                      placeholder="Search"
                    />
                  </div>
                  <Table
                    bordered
                    className="table-body-content"
                    responsive="sm"
                  >
                    <thead>
                      <tr>
                        <th className="t-head">Sr. No</th>
                        <th className="t-head">Business Name</th>
                        <th className="t-head">Address</th>
                        <th className="t-head">Email Address</th>
                        <th className="t-head">Phone No.</th>
                        <th className="t-head">Website link</th>
                        <th className="t-head">Action</th>
                        <th className="t-head">View</th>
                      </tr>
                    
                     {getAllData.map((item,i)=>{
                      return(
                        <tr>
                        <td className="t-head">{i}</td>
                        <td className="t-head">{item?.businessName}</td>
                        <td className="t-head">{item?.address}</td>
                        <th className="t-head">{item.emailAddress}</th>
                        <td className="t-head">{item?.phoneNumber}</td>
                        <td className="t-head">{item?.websiteLink}</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
                              onChange={(e)=>
                                console.log(e.target.checked,"this is value")
                              }
                              className="react-switch-checkbox"
                              id={`react-switch-new`}
                              type="checkbox"
                            />
                            <label
                              className="react-switch-label"
                              htmlFor={`react-switch-new`}
                            >
                              <span className={`react-switch-button`}/>
                            </label>
                          </div>
                        </td>
                        <td className="t-disc">
                          <button className="btn eye-btn" onClick={()=>navigate(`/BusinessProfile/${item?._id}`)}>
                            <i class="far fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      )
                     })
                    }
                      
                    </thead>
                    <tbody></tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          getAllData={getAllData}
          setGetAllData={setGetAllData}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};
export default BusinessList;

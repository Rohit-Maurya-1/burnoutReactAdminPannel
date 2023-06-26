import React, { useEffect, useState } from "react";
import { Container, Row, Col,Modal,Form } from "react-bootstrap";
import Header from "../../Header/Header";
import { GETUSER ,UPDATEUSER} from "../../Api/ApiIntigretion";
import { useParams,useNavigate} from "react-router-dom";
function MyVerticallyCenteredModal(props){
  const navigate=useNavigate()
   const getDefault= props.getDataID
   const id= props.id
  const [values,setValues] = useState({
    username:"",
    phoneNumber:"",
  });
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]:value,
    });
  };
  useEffect(()=>{
     setValues({username:getDefault.username,phoneNumber:getDefault.phoneNumber})
  },[])
  const handleUpdateUser = async(e) =>{
        e.preventDefault();
        const data = await UPDATEUSER(values,id);
        if(data.data.Response){
         navigate("/manageuser")
         props.setGetDataID(data.data.Response)
         props.setModalShow(false);
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal--header">
        <Modal.Title id="contained-modal-title-vcenter">Update User Data</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5 pb-5 pt-0">
        <div className="notifi--wraper-body">
          <Form>
            <div className="form-group mb-4">
              <input
                type="text"
                onChange={handleChange}
                className="form-control input-control-noti"
                placeholder="Name"
                Value={getDefault?.username}
                name="username"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control input-control-noti"
                placeholder="Email Address"
                value={getDefault?.email}
                name="email"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                onChange={handleChange}
                className="form-control input-control-noti"
                placeholder="Phone Number"
                Value={getDefault?.phoneNumber}
                name="phoneNumber"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                className="form-control text-control-noti mange-txtarea"
                placeholder="Discription"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={handleUpdateUser}
                className="btn btnSend-notifi">
                Add
              </button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const ManageUserProfile = () => {
  const [modalShow, setModalShow]=useState();
  const [getDataID, setGetDataID]=useState({});
  const {id}=useParams()
//====================================================//
useEffect(()=>{
  getItem()
  },[])
  const getItem = async()=>{
  const getData = await GETUSER();
  let getId = getData.data.Response;
  const newData = getId.find((item)=>{
    return item._id===id;
  });
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
                    <Col lg={12}>
                      <div className="bus--txtcontent">
                        <div className="edit-row text-end">
                          <span>
                            <button  onClick={()=>setModalShow(true)} type="button" className="btn btn-edit">
                              Edit
                            </button>
                          </span>
                        </div>
                        <div className="listprofile--wrap">
                          <div className="flex-listitem--both">
                            <div className="rightSide--businfo">
                              <h3 className="title--list">Throwback Fitness</h3>
                              <ul className="listmore--info-bis">
                                <li className="info--art-txt">
                                  <span className="fst--listmt">name</span>
                                  <span className="scnd--listmt">
                                    {getDataID?.username}
                                  </span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">email</span>
                                  <span className="scnd--listmt">
                                    {getDataID?.email}
                                  </span>
                                </li>
                                <li className="info--art-txt">
                                  <span className="fst--listmt">
                                    phoneNumber
                                  </span>
                                  <span className="scnd--listmt">
                                    {getDataID?.phoneNumber}
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
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          setGetDataID={setGetDataID}
          getDataID={getDataID}
          id={getDataID._id}
          setModalShow={setModalShow}
          
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};
export default ManageUserProfile;

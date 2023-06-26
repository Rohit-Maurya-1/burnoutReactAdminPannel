import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Container, Row, Col, Table, Modal, Form } from "react-bootstrap";
import Header from "../../Header/Header";
import ReactPaginate from "react-paginate";
// import axios from "axios"
import { ADDUSER,DELETEUSER ,SEARCHDATA, GETDETAILS} from "../../Api/ApiIntigretion";
import "./Manageuser.css";
// import {useSeletor}from "react-redux"
// import {useDispatch} from "react-redux"
import { useNavigate} from "react-router-dom";
// import { ADD_USER } from "../../../store/actions/UserAction";
// import UserReducer from "../../../store/reducers/UserReducers";
function MyVerticallyCenteredModal(props){
  // const dispath= useDispatch()
  const [values, setValues] = useState({
    username: "",
    email:"",
    phoneNumber: "",
  });
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]:value,
    });
  };
  const handleAddUser = async (e) =>{
    e.preventDefault();
    const data = await ADDUSER(values);
      if (data.data.Response) {
        props.setModalShow(false);
      //  dispath(UserReducer(ADD_USER(values)))
       let newData=[...props.addUser,data.data.Response];
       props.setAddUser(newData);
    }
  };
  return(
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal--header">
        <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title>
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
                name="username"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                onChange={handleChange}
                className="form-control input-control-noti"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                onChange={handleChange}
                className="form-control input-control-noti"
                placeholder="Phone Number"
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
                onClick={handleAddUser}
                className="btn btnSend-notifi"
              >
                Add
              </button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const Manageuser = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchData,setSearchData]=useState([])
  const [modalShow,setModalShow] = useState(false);
  const [addUser,setAddUser] = useState([]);
  // const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();
   
  //  useEffect(()=>{
  //   getItem();
  // },[]);
  //    const getItem =async ()=>{
  //    const getData = await GETUSER();
  //    if(getData?.data?.status===true){
  //      setAddUser(getData?.data?.Response);
  //    }else if(getData?.data?.status === false){
  //      console.log("error")
  //    }
  //   };
  //================================================logic pagination=================
  

  useEffect(()=>{
    getItem();
  },[]);
       const getItem =async ()=>{
       const getData = await GETDETAILS();
       console.log(getData.data.data,"ddddddddddddddddddddddd");
       setAddUser(getData.data.data);
      };
//================================= get pagination =======================================



//========================deleteData=================================//
   const handleDeleteData= async(id)=>{
               await DELETEUSER(id) 
               const deleteData= addUser.filter((item)=>{
               return item._id!==id
       })
         setAddUser(deleteData)
        }
    const SearchData= async(e)=>{
              const key= e.target.value
              if(key){
              const res= await SEARCHDATA(key)
              setAddUser(res?.data?.response)
              }else{
                getItem()
              }  
          }
 //=========================================pagination===========================
return (
    <>
      <Header/>
      <div className="main-manage--wrapp">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="main--tablecard">
                <div className="card-header-main">
                  <h3 className="heading-items-prod">Manage Users</h3>
                  <div className="adduser--tab">
                    <button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                      className="btn btn-add"
                    >
                      Add User
                    </button>
                  </div>
                </div>
                <div className="table-wraper-body">
                  <div className="search-table-bar">
                    <input 
                      onChange={SearchData}
                      type="search"
                      className="form-control search-txt-control"
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
                        <th className="t-head">Sr.No</th>
                        <th className="t-head">Name</th>
                        <th className="t-head">Email Address</th>
                        <th className="t-head">Phone No.</th>
                        <th className="t-head">Action</th>
                        <th className="t-head">View</th>
                      </tr>
                    </thead>
                    <thead>
                      {/* //===================================== */}
                      {addUser.map((value,i) => {
                        return (
                          <tr>
                            <td className="t-head">{i+1}</td>
                            <td className="t-head">{value?.username}</td>
                            <td className="t-head">{value?.email}</td>
                            <td className="t-head">{value?.phoneNumber}</td>
                            <td className="t-disc">
                              <div className="switch-boxbtn">
                                <input
                                  onChange={(e) =>
                                    console.log(
                                      e.target.checked,
                                      "this is value"
                                    )
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
                              <button
                                className="btn eye-btn"
                                onClick={()=>navigate(`/ManageUserProfile/${value?._id}`)}
                              >
                                <i class="far fa-eye"></i>
                              </button>
                            </td>
                            <button
                                className="btn eye-btn"
                                onClick={()=>handleDeleteData(value?._id)}
                               ><i class="far fa-eye"></i>
                              </button>
                            <td>
                             </td>
                          </tr>
                        );
                      })}
                    {/*=======================================================*/}
                    </thead>
                 </Table>
                </div>
              </div>
            </Col>
        
          </Row>
          <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={"..."}
                    pageCount={5}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    // onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                  />  
        </Container>
        {/*==================================== call function==================== */}
        <MyVerticallyCenteredModal
          show={modalShow}
          addUser={addUser}
          // getItem={getItem()}
          setAddUser={setAddUser}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
        </div>
     
    </>

  );
};

export default Manageuser;

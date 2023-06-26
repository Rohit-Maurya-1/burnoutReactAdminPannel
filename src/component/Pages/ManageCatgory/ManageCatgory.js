import React  from "react";
import { Container, Row, Col, Table, Form, Modal,Nav } from "react-bootstrap";
import Header from "../../Header/Header";
import "../../../App.css";
import "./style.css";
function MyVerticallyCenteredModal(props) {
 return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal--header">
        <Modal.Title id="contained-modal-title-vcenter">
         </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5 pb-5 pt-0">
        <div className="notifi--wraper-body">
         <Form>
           <div className="form-group mb-4">
             <input
                type="text"
                className="form-control input-control-noti"
                placeholder="Category Name"
                 />
            </div>
            <div className="form-group">
             <button
                  type="button"
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
function ManageCatgory() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Header />
      <div className="main-manage--wrapp">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="main--tablecard">
                <div className="card-header-main">
                  <h3 className="heading-items-prod">Manage Categories</h3>
                  <div className="adduser--tab">
                    <button
                      variant="primary"
                      onClick={()=>setModalShow(true)}
                      className="btn btn-add">
                      Add Category
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
                        <th className="t-head">Category Name</th>
                        <th className="t-head">Action</th>
                        <th className="t-head">Edit Category</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="t-head">Sr. No</th>
                        <th className="t-head">Category Name</th>
                        <th className="t-head">Action</th>
                        <th className="t-head">Edit Category</th>
                      </tr>
                      <tr>
                        <th className="t-head">Sr. No</th>
                        <th className="t-head">Category Name</th>
                        <td className="t-disc">
                            <div className="switch-boxbtn">
                            <input
                                onChange={(e) =>
                                  console.log(e.target.checked, "this is value")
                                }
                                className="react-switch-checkbox"
                                id={`react-switch-new`}
                                type="checkbox"
                              />
                              <label
                                className="react-switch-label"
                                htmlFor={`react-switch-new`}
                                >
                                <span className={`react-switch-button`} />
                              </label>
                            </div>
                          </td>
                          <td className="t-disc">
                            <Nav.Link
                              href="#link"
                              onClick={() => {
                                setModalShow(true);
                             }}
                            >
                              Edit
                            </Nav.Link>
                          </td>
                      
                      </tr>
                      <tr>
                        <th className="t-head">Sr.No</th>
                        <th className="t-head">Category Name</th>
                        
                        <td className="t-disc">
                            <div className="switch-boxbtn">
                            <input
                                onChange={(e) =>
                                  console.log(e.target.checked, "this is value")
                                }
                                className="react-switch-checkbox"
                                id={`react-switch-new`}
                                type="checkbox"
                              />
                              <label
                                className="react-switch-label"
                                htmlFor={`react-switch-new`}
                                >
                                <span className={`react-switch-button`} />
                              </label>
                            </div>
                          </td>
                          <td className="t-disc">
                            <Nav.Link
                              href="#link"
                              onClick={() => {
                                setModalShow(true);
                             }}
                            >
                              Edit
                            </Nav.Link>
                          </td>
                      </tr>
                         
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
         />
      </div>
    </>
  );
}
export default ManageCatgory;
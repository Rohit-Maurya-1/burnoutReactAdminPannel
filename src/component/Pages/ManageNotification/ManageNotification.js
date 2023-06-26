import React from "react";
import {Container, Row, Col, Table, Modal, Form} from 'react-bootstrap';
import Header from "../../Header/Header";
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
            Add Notification
          </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5 pb-5 pt-0">
          <div className="notifi--wraper-body">
            <Form>
                <div className="form-group mb-4">
                    <textarea className="form-control text-control-noti" placeholder="Notification Text...."></textarea>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btnSend-notifi">Send</button>
                </div>
            </Form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
function ManageNotification() {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
            <Header />
            <div className="main-manage--wrapp">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <div className="main--tablecard">
                                <div className="card-header-main">
                                    <h3 className="heading-items-prod">Manage Notifications</h3>
                                    <div className="adduser--tab"><button  variant="primary" onClick={() => setModalShow(true)} className="btn btn-add">Add Notifications</button></div>
                                </div>
                                <div className="table-wraper-body">
                                    <div className="search-table-bar">
                                        <input type="text" class="form-control search-txt-control" placeholder="Search" />
                                    </div>
                                    <Table bordered className="table-body-content" responsive="xl">
                                        <thead>
                                            <tr>
                                                <th className="t-head">Sr. No</th>
                                                <th className="t-head">Business Name</th>
                                                <th className="t-head">Business Email Address</th>
                                                <th className="t-head">Notification</th>
                                                <th className="t-head">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="t-disc">01</td>
                                                <td className="t-disc">Throwback Fitness</td>
                                                <td className="t-disc">john@gmail.com</td>
                                                <td className="t-disc">Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                                <td className="t-disc">
                                                    <button className="btn delt-act me-2"><i class="fal fa-times"></i></button>
                                                    <button className="btn accept-act ms-2"><i class="fal fa-check"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="t-disc">01</td>
                                                <td className="t-disc">Throwback Fitness</td>
                                                <td className="t-disc">john@gmail.com</td>
                                                <td className="t-disc">Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                                <td className="t-disc">
                                                    <button className="btn delt-act me-2"><i class="fal fa-times"></i></button>
                                                    <button className="btn accept-act ms-2"><i class="fal fa-check"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="t-disc">01</td>
                                                <td className="t-disc">Throwback Fitness</td>
                                                <td className="t-disc">john@gmail.com</td>
                                                <td className="t-disc">Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                                <td className="t-disc">
                                                    <button className="btn delt-act me-2"><i class="fal fa-times"></i></button>
                                                    <button className="btn accept-act ms-2"><i class="fal fa-check"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="t-disc">01</td>
                                                <td className="t-disc">Throwback Fitness</td>
                                                <td className="t-disc">john@gmail.com</td>
                                                <td className="t-disc">Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                                <td className="t-disc">
                                                    <button className="btn delt-act me-2"><i class="fal fa-times"></i></button>
                                                    <button className="btn accept-act ms-2"><i class="fal fa-check"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="t-disc">01</td>
                                                <td className="t-disc">Throwback Fitness</td>
                                                <td className="t-disc">john@gmail.com</td>
                                                <td className="t-disc">Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                                <td className="t-disc">
                                                    <button className="btn delt-act me-2"><i class="fal fa-times"></i></button>
                                                    <button className="btn accept-act ms-2"><i class="fal fa-check"></i></button>
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
    )
}
export default ManageNotification;
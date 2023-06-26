import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../Header/Header";
import "./style.css";

const ManagefeaturedBusiness=()=>{
  return (
    <>
      <Header/>
      <div className="main-manage--wrapp">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="main--tablecard">
                <div className="card-header-main">
                  <h3 className="heading-items-prod">
                    Manage Featured Businesses
                  </h3>
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
                        <th className="t-head">Featured Business Name</th>
                        <th className="t-head">Subscription Plan</th>
                        <th className="t-head">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t-disc">01</td>
                        <td className="t-disc">Throwback Fitness</td>
                        <td className="t-disc">Free</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
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
                      </tr>
                      <tr>
                        <td className="t-disc">01</td>
                        <td className="t-disc">Throwback Fitness</td>
                        <td className="t-disc">Free</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
                              className="react-switch-checkbox"
                              id={`react-switch-neaaawq`}
                              type="checkbox"
                            />
                            <label
                              className="react-switch-label"
                              htmlFor={`react-switch-neaaawq`}
                            >
                              <span className={`react-switch-button`} />
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="t-disc">01</td>
                        <td className="t-disc">Throwback Fitness</td>
                        <td className="t-disc">Free</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
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
                      </tr>
                      <tr>
                        <td className="t-disc">01</td>
                        <td className="t-disc">Throwback Fitness</td>
                        <td className="t-disc">Free</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
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
                      </tr>
                      <tr>
                        <td className="t-disc">01</td>
                        <td className="t-disc">Throwback Fitness</td>
                        <td className="t-disc">Free</td>
                        <td className="t-disc">
                          <div className="switch-boxbtn">
                            <input
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
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ManagefeaturedBusiness;

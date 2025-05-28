import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const SearchData = ({ handlesearchzone, filter, handleUnit, handlesearchblock, handlesearchgp }: any) => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Row className="g-3">
                                <Col className="col-xxl">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search zone" value={filter} onChange={(e) => handlesearchzone(e.target.value)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                               {/*  <Col sm={6} className="col-xxl">
                                    <div>
                                        <Form.Select className="form-control" onChange={(e) => handleUnit(e.target.value)}>
                                            <option value="Count">Count</option>
                                            <option value="Percentage">Percentage</option>
                                        </Form.Select>
                                    </div>
                                </Col> */}
                                <Col className="col-xxl">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search Block" value={filter} onChange={(e) => handlesearchblock(e.target.value)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col className="col-xxl">
                                    <div className="search-box">
                                        <Form.Control type="text" className="search" placeholder="Search GP" value={filter} onChange={(e) => handlesearchgp(e.target.value)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
}

export default SearchData;
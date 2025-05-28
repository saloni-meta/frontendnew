import React from 'react';
import { Card, Col, Row, Container, Form } from 'react-bootstrap';
import  {ScrollHorizontal} from 'pages/Components/tables/DataTables/Tabledata'
import { Link } from "react-router-dom";


const GpAssets = () => {
  document.title = "Datatables | Steex Adminh & Dashboard Template";
  return (
    <React.Fragment>
       <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Row className="align-items-center g-2">
                        <Col lg={3} className="me-auto">
                            <h6 className="card-title mb-0">Tickets List</h6>
                        </Col>
                        <Col lg={2} sm={4}>
                            <div className="search-box">
                                <Form.Control type="text" className="search" placeholder="Search for tickets, date, client or something..." />
                                <i className="ri-search-line search-icon"></i>
                            </div>
                        </Col>
                        <Col className="col-sm-auto">
                            <div className="hstack gap-2">
                                <button className="btn btn-subtle-danger d-none" id="remove-actions" ><i className="ri-delete-bin-2-line"></i></button>
                                <Link to="#addTickets" className="btn btn-secondary"><i className="bi bi-plus-circle align-baseline me-1"></i> Add Ticket</Link>
                            </div>
                        </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <ScrollHorizontal />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      </div>
    </React.Fragment>
  )
}

export default GpAssets;

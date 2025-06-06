import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BasicTable, ScrollVertical, ScrollHorizontal, AlternativePagination, FixedHeaderDatatables, GoogleSheetsEsqueDatatables, AjaxDatatables } from './Tabledata'


const Datatable = () => {
  document.title = "Datatables | Steex Adminh & Dashboard Template";
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Basic Datatables</h5>
            </Card.Header>
            <Card.Body>
              <BasicTable />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Scroll - Vertical</h5>
            </Card.Header>
            <Card.Body>
              <ScrollVertical />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Scroll - Horizontal</h5>
            </Card.Header>
            <Card.Body>
              <ScrollHorizontal />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Alternative Pagination</h5>
            </Card.Header>
            <Card.Body>
              <AlternativePagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Fixed Header Datatables</h5>
            </Card.Header>
            <Card.Body>
              <FixedHeaderDatatables />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Google Sheets Esque</h5>
            </Card.Header>
            <Card.Body>
              <GoogleSheetsEsqueDatatables />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="card-title mb-0">Ajax Datatables</h5>
            </Card.Header>
            <Card.Body>
              <AjaxDatatables />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Datatable;
import BreadCrumb from 'Common/BreadCrumb';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { BasicSlop, MultiGroup } from './Slop';

const SlopChart = () => {

    document.title = "Apex Slop Charts | Steex Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <BreadCrumb pageTitle="Apexcharts" title="Scatter Charts" />

                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Slop Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <BasicSlop dataColors='["--tb-danger", "--tb-success", "--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multi group Charts</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultiGroup dataColors='["--tb-primary", "--tb-success", "--tb-danger", "--tb-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default SlopChart
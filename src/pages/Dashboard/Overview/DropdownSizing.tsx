import React from 'react';
import { Card, Col, Dropdown, Row} from 'react-bootstrap';

const DropdownSizing = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" size='lg'>
                                        Package 6
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Package 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DropdownSizing;
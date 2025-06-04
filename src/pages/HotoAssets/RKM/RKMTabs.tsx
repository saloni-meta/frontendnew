import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import AssetWiseTable from "./AssetWise/AssetWiseTable";
import SpanWiseTable from "./SpanWise/SpanWiseTable";

const RKMTabs = () => {
  const [activeTab, setActiveTab] = useState("assetWiseTable");

  const renderTabContent = () => {
    console.log("inside renderTabConte", activeTab);
    switch (activeTab) {
      case "assetWiseTable":
        return <AssetWiseTable />;
      case "spanWiseTable":
        return <SpanWiseTable />;
      default:
        return <AssetWiseTable />;
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="d-flex flex-column align-items-stretch">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-grow-1">
                    <Card.Title as="h5" className="mb-0">Block Assets</Card.Title>
                  </div>
    
                  <div className="d-flex align-items-center gap-2">
                    <Button variant="subtle-info"><i className="ph-cloud-arrow-up align-middle me-1"></i>  Export</Button>
                    <div className="search-box">
                      <Form.Control type="text" className="search" placeholder="Search" />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    <Button
                      variant={activeTab === 'spanWiseTable' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('spanWiseTable')}
                    >
                      Span Wise
                    </Button>
                    <Button
                      variant={activeTab === 'assetWiseTable' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('assetWiseTable')}
                    >
                      Asset Wise
                    </Button>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>{renderTabContent()}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RKMTabs;

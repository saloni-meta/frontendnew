import React, { useState } from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { assetPortfolioData } from 'pages/HotoAssets/Block/DemoData/demodata';
import GPTransferTable from './GPTransferTable';
import GPMaintenanceTable from './GPMaintenanceTable';

type GPAsset = {
  srNo: number;
  equipment: string;
  serialNo: string;
  condition: string;
  status: string;
  blockLocation: string;
  blockCode: string;
  siteType: string;
  warranty: string;
  requestFor: string;

  //form top fields
  gp: string;
  district: string;
  popType: string;
  address: string;
  gpCode: string;
  districtCode: string;
  landmark: string;
  latitude: string;
  longitude: string;

  //form bottom fields
  unitSize: string;
  make: string;
  model: string;
  racksPositioning: string;
  ofcConnectivity: string;
  connectivityEntry: string;
  ofcType: string;
  entryPoint: string;
  socketAvailability: string;
  slotType: string;
};


const GPAssetForm: React.FC = () => {
  const { srNo } = useParams<{ srNo: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("transferTable");
  const gpasset = assetPortfolioData.find(a => String(a.srNo) === srNo);

  if (!gpasset) return <div>No records to display </div>;

  const renderTable = () => {
    console.log("table switch workinggg!!!!")
    switch (activeTab) {
      case "transferTable" :
        return <GPTransferTable />;
      case "maintenanceTable" :
        return <GPMaintenanceTable />;
      default:
        return <GPTransferTable />; 
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="container py-4">
            <div className="d-flex align-items-center mb-4">
              <Button variant="link" className="p-0 me-2 text-dark" onClick={() => navigate(-1)} aria-label="Back">
                <i className="ri-arrow-left-line fs-5"></i>
              </Button>
              <h3 className="mb-0">Rack</h3>
            </div>
     
          <Row className="mb-3">
            <Col md={6}>
              <p><strong>GP:</strong> {gpasset.gp}</p>
              <p><strong>Block:</strong> {gpasset.blockLocation}</p>
              <p><strong>District:</strong> {gpasset.district}</p>
              <p><strong>POP Type:</strong> {gpasset.popType}</p>
              <p><strong>Address:</strong> {gpasset.address}</p>
            </Col>
            <Col md={6}>
              <p><strong>GP Code:</strong> {gpasset.gpCode}</p>
              <p><strong>Block Code:</strong> {gpasset.blockCode}</p>
              <p><strong>District Code:</strong> {gpasset.districtCode}</p>
              <p><strong>Landmark:</strong> {gpasset.landmark}</p>
              <p><strong>Lat & Long:</strong> {gpasset.latitude},{gpasset.longitude}</p>
            </Col>
          </Row>

            <h5>Details</h5>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Unit Size</Form.Label>
                <Form.Control value={gpasset.unitSize} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Make</Form.Label>
                <Form.Control value={gpasset.make} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Model</Form.Label>
                <Form.Control value={gpasset.model} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Racks Positioning</Form.Label>
                <Form.Control value={gpasset.racksPositioning} readOnly />
              </Col>
              <Col md={3}>
                <Form.Label>OFC Connectivity</Form.Label>
                <Form.Control value={gpasset.ofcConnectivity } readOnly />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>No. of Connectivity Entry</Form.Label>
                <Form.Control value={gpasset.connectivityEntry} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>OFC Type</Form.Label>
                <Form.Control value={gpasset.ofcType} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Entry Point</Form.Label>
                <Form.Control value={gpasset.entryPoint} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Power Socket Availability</Form.Label>
                <Form.Control value={gpasset.socketAvailability} readOnly />
              </Col>
              <Col md={3}>
                <Form.Label>Single Slot/Multi Slot</Form.Label>
                <Form.Control value={gpasset.slotType} readOnly />
              </Col>
            </Row>

            <div className="d-flex gap-3 my-3">
              <Button 
                variant={activeTab === 'transferTable' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveTab('transferTable')}
              >
                Transfer
              </Button>
              <Button variant={activeTab === 'maintenanceTable' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveTab('maintenanceTable')}
              >
                Maintenance
              </Button>
            </div>
            <div>
              {renderTable()}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="secondary" onClick={() => navigate(-1)} >
                Cancel
              </Button>
            </div>
          </div>  
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GPAssetForm;
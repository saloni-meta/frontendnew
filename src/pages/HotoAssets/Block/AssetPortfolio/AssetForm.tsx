import React, { useState } from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { assetPortfolioData } from '../DemoData/demodata';
import TransferTable from './TransferTable';
import MaintenanceTable from './MaintenanceTable';

type Asset = {
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


const AssetForm: React.FC = () => {
  const { srNo } = useParams<{ srNo: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("transferTable");
  const asset = assetPortfolioData.find(a => String(a.srNo) === srNo);

  if (!asset) return <div>No records to display </div>;

  const renderTable = () => {
    console.log("table switch workinggg!!!!")
    switch (activeTab) {
      case "transferTable" :
        return <TransferTable />;
      case "maintenanceTable" :
        return <MaintenanceTable />;
      default:
        return <TransferTable />; 
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
              <p><strong>GP:</strong> {asset.gp}</p>
              <p><strong>Block:</strong> {asset.blockLocation}</p>
              <p><strong>District:</strong> {asset.district}</p>
              <p><strong>POP Type:</strong> {asset.popType}</p>
              <p><strong>Address:</strong> {asset.address}</p>
            </Col>
            <Col md={6}>
              <p><strong>GP Code:</strong> {asset.gpCode}</p>
              <p><strong>Block Code:</strong> {asset.blockCode}</p>
              <p><strong>District Code:</strong> {asset.districtCode}</p>
              <p><strong>Landmark:</strong> {asset.landmark}</p>
              <p><strong>Lat & Long:</strong> {asset.latitude},{asset.longitude}</p>
            </Col>
          </Row>

            <h5>Details</h5>
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Unit Size</Form.Label>
                <Form.Control value={asset.unitSize} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Make</Form.Label>
                <Form.Control value={asset.make} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Model</Form.Label>
                <Form.Control value={asset.model} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Racks Positioning</Form.Label>
                <Form.Control value={asset.racksPositioning} readOnly />
              </Col>
              <Col md={3}>
                <Form.Label>OFC Connectivity</Form.Label>
                <Form.Control value={asset.ofcConnectivity } readOnly />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>No. of Connectivity Entry</Form.Label>
                <Form.Control value={asset.connectivityEntry} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>OFC Type</Form.Label>
                <Form.Control value={asset.ofcType} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Entry Point</Form.Label>
                <Form.Control value={asset.entryPoint} readOnly />
              </Col>
              <Col md={2}>
                <Form.Label>Power Socket Availability</Form.Label>
                <Form.Control value={asset.socketAvailability} readOnly />
              </Col>
              <Col md={3}>
                <Form.Label>Single Slot/Multi Slot</Form.Label>
                <Form.Control value={asset.slotType} readOnly />
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

export default AssetForm;
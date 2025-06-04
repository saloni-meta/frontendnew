import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
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

interface AssetFormProps {
  show: boolean;
  onClose: () => void;
  asset: Asset | null;
}

const AssetForm: React.FC<AssetFormProps> = ({ show, onClose, asset }) => {
  const [activeTab, setActiveTab] = useState("transferTable");

  if (!asset) return null;

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
    <Modal show={show} onHide={onClose} centered size="xl">
      <Modal.Header closeButton>
        <div className="d-flex flex-column w-100">
          <div className="d-flex align-items-center mb-2">
            <Button variant="link" className="p-0 me-2 text-dark" onClick={onClose}>
              <i className="ri-arrow-left-line fs-5"></i>
            </Button>
            <Modal.Title>Rack</Modal.Title>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
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
            <Form.Control value={asset.make} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>Make</Form.Label>
            <Form.Control value={asset.make} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>Model</Form.Label>
            <Form.Control value={asset.model} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>Racks Positioning</Form.Label>
            <Form.Control value={asset.racksPositioning} readOnly />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>OFC Connectivity</Form.Label>
            <Form.Control value={asset.racksPositioning} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>No. of Connectivity Entry</Form.Label>
            <Form.Control value={asset.connectivityEntry} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>OFC Type</Form.Label>
            <Form.Control value={asset.ofcType} readOnly />
          </Col>
          <Col md={3}>
            <Form.Label>Entry Point</Form.Label>
            <Form.Control value={asset.entryPoint} readOnly />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
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
            onClick={() => setActiveTab('trasnferTable')}
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
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssetForm;
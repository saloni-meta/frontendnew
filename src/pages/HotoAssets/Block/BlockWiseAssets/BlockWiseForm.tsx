import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import BlockFormTable from './BlockFormTable';

type Block = {
  srNo: string;
  equipment: string;
  serialNo: string;
  condition: string;
  status: string;
  siteType: string;
  warranty: string;
  requestFor: string;

  //form top fields
  blockLocation: string;
  district: string;
  popType: string;
  address: string;
  blockCode: string;
  districtCode: string;
  landmark: string;
  latitude: string;
  longitude: string;
};

interface AssetFormProps {
  show: boolean;
  onClose: () => void;
  block: Block | null;
}

const BlockWiseForm: React.FC<AssetFormProps> = ({ show, onClose, block }) => {

  if (!block) return null;

  return (
    <Modal show={show} onHide={onClose} centered size="xl">
      <Modal.Header closeButton>
        <div className="d-flex flex-column w-100">
          <div className="d-flex align-items-center mb-2">
            <Button variant="link" className="p-0 me-2 text-dark" onClick={onClose} aria-label="Back">
              <i className="ri-arrow-left-line fs-5"></i>
            </Button>
            <Modal.Title>Rack</Modal.Title>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col md={6}>
            <p><strong>Block:</strong> {block.blockLocation}</p>
            <p><strong>District:</strong> {block.district}</p>
            <p><strong>POP Type:</strong> {block.popType}</p>
            <p><strong>Address:</strong> {block.address}</p>
          </Col>
          <Col md={6}>
            <p><strong>Block Code:</strong> {block.blockCode}</p>
            <p><strong>District Code:</strong> {block.districtCode}</p>
            <p><strong>Landmark:</strong> {block.landmark}</p>
            <p><strong>Lat & Long:</strong> {block.latitude},{block.longitude}</p>
          </Col>
        </Row>
        <div>
          <BlockFormTable />
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

export default BlockWiseForm;
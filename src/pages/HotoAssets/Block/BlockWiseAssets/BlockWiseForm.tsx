import React from 'react';
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';
import BlockFormTable from './BlockFormTable';
import { useNavigate, useParams } from 'react-router-dom';
import { blockWiseAssetTableData } from '../DemoData/demodata';

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

const BlockWiseForm: React.FC = () => {
  const { srNo } = useParams<{ srNo: string }>();
  const navigate = useNavigate();
  const block = blockWiseAssetTableData.find(a => String(a.srNo) === srNo);

  console.log("blockwiseform mounted!!!");

  if (!block) return <div>No records to display </div>;

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>     
          <div className="container py-4">
            <div className="d-flex align-items-center mb-2">
              <Button variant="link" className="p-0 me-2 text-dark" onClick={() => navigate(-1)} aria-label="Back">
                <i className="ri-arrow-left-line fs-4"></i>
              </Button>
              <h3>Asset Details</h3>
            </div>
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
            <div className="d-flex justify-content-center mt-4">
              <Button variant="secondary" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BlockWiseForm;
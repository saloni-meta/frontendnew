import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

interface EditDetails {
  srNo: string;
  serialNo: string;
  condition: string;
  status: string;
  warranty: string;
  make: string;
  model: string;
}

 interface EditDetailsProps {
  show: boolean;
  onClose: () => void;
  editDetails: EditDetails;
  onUpdate: (updated: EditDetails) => void;
 }

const EditDetailsForm: React.FC<EditDetailsProps> = ({ show, onClose, editDetails, onUpdate }) => {

  const [form, setForm] = useState<EditDetails>(editDetails);

  useEffect(() => {
    setForm(editDetails);
  }, [editDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleUpdate = () => {
    onUpdate(form); 
    onClose();      
  };

  return (
    <Modal show={show} onHide={onClose} centered size="xl" backdrop="static">
      <Modal.Header closeButton>
        <div className="d-flex flex-column w-100">
          <Modal.Title>Edit Details</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Row className="gy-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Equipment</Form.Label>
              <Form.Control type="text" value="Rack" readOnly />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Make</Form.Label>
              <Form.Control type="text" value={form.make} readOnly />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" value={form.model} readOnly />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Serial No</Form.Label>
              <Form.Control type="text" value={form.serialNo} readOnly/>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Warranty Status</Form.Label>
              <Form.Select value={form.warranty} onChange={handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Warranty Due Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group> 
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Condition</Form.Label>
              <Form.Select as='select' name='condition' value = {form.condition} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Robust">Robust</option>
                <option value="Damaged">Damaged</option>
                <option value="Semi-damaged">Semi-Damaged</option>
                <option value="Not Found">Not Found</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select as='select' name='status' value={form.status} onChange={handleChange}>
                <option value="">Select</option>
                <option value="In Use">In Use</option>
                <option value="Not in Use">Not In Use</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
               <Form.Label>Remarks</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Enter remarks" />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDetailsForm;
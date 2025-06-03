import React from 'react';
import { Dropdown, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { replacementData } from './demoData';

const columns = [
  {
    name: <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />,
    cell: () => (
      <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />
    ),
  },
  {
    name: <span className='font-weight-bold fs-sm'>SR No.</span>,
    selector: (row: any) => row.srNo,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>ID</span>,
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Purchase ID</span>,
    selector: (row: any) => row.purchaseId,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Title</span>,
    selector: (row: any) => <Link to="#">{row.title}</Link>,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>User</span>,
    selector: (row: any) => row.user,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Assigned To</span>,
    selector: (row: any) => row.assigned,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Create By</span>,
    selector: (row: any) => row.createdBy,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Create Date</span>,
    selector: (row: any) => row.createDate,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Status</span>,
    sortable: true,
    selector: (cell: any) => {
      switch (cell.status) {
        case 'Re-open':
          return <span className="badge bg-info-subtle text-info"> {cell.status} </span>;
        case 'On-Hold':
          return <span className="badge bg-secondary-subtle text-secondary"> {cell.status} </span>;
        case 'Closed':
          return <span className="badge bg-danger-subtle text-danger"> {cell.status} </span>;
        case 'Inprogress':
          return <span className="badge bg-warning-subtle text-warning"> {cell.status} </span>;
        case 'Open':
          return <span className="badge bg-primary-subtle text-primary"> {cell.status} </span>;
        case 'New':
          return <span className="badge bg-success-subtle text-success"> {cell.status} </span>;
        default:
          return <span className="badge bg-success-subtle text-success"> {cell.status} </span>;
      }
    },
  },
  {
    name: <span className='font-weight-bold fs-sm'>Priority</span>,
    sortable: true,
    selector: (cell: any) => {
      switch (cell.priority) {
        case 'High':
          return <span className="badge bg-danger"> {cell.priority} </span>;
        case 'Medium':
          return <span className="badge bg-info"> {cell.priority} </span>;
        case 'Low':
          return <span className="badge bg-success"> {cell.priority} </span>;
        default:
          return <span className="badge bg-danger"> {cell.priority} </span>;
      }
    },
  },
  {
    name: <span className='font-weight-bold fs-sm'>Action</span>,
    sortable: true,
    cell: () => {
      return (
        <Dropdown className="d-inline-block">
          <Dropdown.Toggle className="btn btn-light bg-secondary-subtle arrow-none btn-sm">
            <i className="ri-more-fill align-middle" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="#!">
              <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
            </Dropdown.Item>
            <Dropdown.Item href="#" className="edit-item-btn">
              <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit
            </Dropdown.Item>
            <Dropdown.Item href="#" className="remove-item-btn">
              <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    },
  },
];

const ReplacementDataTable = () => {
  return (
    <DataTable
      columns={columns}
      data={replacementData}
      pagination
    />
  );
};

export default ReplacementDataTable;
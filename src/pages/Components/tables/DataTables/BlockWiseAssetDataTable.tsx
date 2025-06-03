import React from 'react';
import { Dropdown, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { blockWiseAssetData } from './demoData';
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";
import { CSVLink } from "react-csv";

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
    name: <span className='font-weight-bold fs-sm'>Equipment</span>,
    selector: (row: any) => row.equipment,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Serial No.</span>,
    selector: (row: any) => row.serialNo,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Condition</span>,
    selector: (row: any) => {
      let badgeClass = 'bg-success';
      if (row.condition === 'Semi-Damaged') {
        badgeClass = 'bg-warning text-dark';
      } else if (row.condition === 'Damaged') {
        badgeClass = 'bg-danger';
      }
      return <span className={`badge ${badgeClass}`}>{row.condition}</span>;
    },
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Status</span>,
    selector: (row: any) => {
      let badgeClass = 'bg-success';
      if (row.status === 'Not in Use') {
        badgeClass = 'bg-secondary';
      }
      return <span className={`badge ${badgeClass}`}>{row.status}</span>;
    },
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Block Location</span>,
    selector: (row: any) => row.blockLocation,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Block Code</span>,
    selector: (row: any) => row.blockCode,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Site Type</span>,
    selector: (row: any) => row.siteType,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Warranty</span>,
    selector: (row: any) => row.warranty,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Requested For</span>,
    selector: (row: any) => row.requestedFor,
    sortable: true,
  },
  {
    name: <span className='font-weight-bold fs-sm'>Details</span>,
    selector: (row: any) => row.details,
    sortable: true,
  },
];

interface Props {
  searchTerm: string;
}

const BlockWiseAssetDataTable = ({ searchTerm }: Props) => {
  const data = blockWiseAssetData.map(item => ({
    ...item,
    assigned: [avatar3, avatar4, avatar5, avatar6, avatar7, avatar8].slice(0, Math.floor(Math.random() * 6)),
  }));

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const csvData = filteredData.map(item => ({
    srNo: item.srNo,
    equipment: item.equipment,
    serialNo: item.serialNo,
    condition: item.condition,
    status: item.status,
    blockLocation: item.blockLocation,
    blockCode: item.blockCode,
    siteType: item.siteType,
    warranty: item.warranty,
    requestedFor: item.requestedFor,
    details: item.details,
  }));

  return (
    <>
      <CSVLink data={csvData} filename={"block_wise_asset.csv"} className="btn btn-secondary csv-download-link">
        <i className="bi bi-download align-baseline me-1"></i> Export to CSV
      </CSVLink>
      <DataTable
        columns={columns}
        data={filteredData}
        fixedHeader
        fixedHeaderScrollHeight="300px"
      />
    </>
  );
};

export default BlockWiseAssetDataTable;
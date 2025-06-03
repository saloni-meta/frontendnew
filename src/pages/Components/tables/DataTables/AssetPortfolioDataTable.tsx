import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { assetPortfolioData } from './demoData';
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
];

const AssetPortfolioDataTable = ({ searchTerm }: { searchTerm: string }) => {
  const filteredData = assetPortfolioData.filter(item =>
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
  }));

  return (
    <>
      <CSVLink data={csvData} filename={"asset_portfolio.csv"} className="btn btn-secondary">
        <i className="bi bi-download align-baseline me-1"></i> Export to CSV
      </CSVLink>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
      />
    </>
  );
};

export default AssetPortfolioDataTable;
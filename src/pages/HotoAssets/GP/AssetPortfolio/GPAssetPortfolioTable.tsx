import React, { useState }  from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { assetPortfolioData } from 'pages/HotoAssets/Block/DemoData/demodata';

const GPAssetPortfolioTable = () => {
  const [showForm, setShowForm] = useState(false); 
    const [selectedRow, setSelectedRow] = useState<GPAsset | null>(null);
  
    const handleOpenForm = (row: any) => {
      setSelectedRow(row);
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
      setSelectedRow(null);
    };

    
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
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Equipment</span>,
            selector: (row: any) => row.equipment,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Serial No</span>,
            selector: (row: any) => row.serialNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Condition</span>,
            sortable: true,
            cell: (row: any) => {
                switch (row.condition) {
                    case "Damaged":
                        return (<Badge bg="danger" className='rounded-pill'> {row.condition}</Badge>);
                    case "Semi-damaged":
                        return (<Badge bg="warning" className='rounded-pill'> {row.condition}</Badge>);
                    case "Robust":
                        return (<Badge bg="success" className='rounded-pill'> {row.condition}</Badge>);
                    default:
                        return (<Badge bg="success" className='rounded-pill'> {row.condition}</Badge>);
                }
            },
        },
        {
            name: <span className='font-weight-bold fs-sm'>Status</span>,
            sortable: true,
            cell: (row: any) => {
                switch (row.status) {
                  case "In Use":
                    return (<Badge bg="primary-subtle" text="info" className='rounded-pill'><i className="mdi mdi-circle-medium"></i> {row.status}</Badge>);
                  case "Close":
                    return (<Badge bg="dark-subtle" text="secondary" className='rounded-pill'><i className="mdi mdi-circle-medium"></i> {row.status}</Badge>);
                  default:
                    return (<Badge bg="dark-subtle" text="secondary" className='rounded-pill'><i className="mdi mdi-circle-medium"></i> {row.status}</Badge>);
                }
            },
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block Location</span>,
            selector: (row: any) => row.blockLocation,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block code</span>,
            selector: (row: any) => row.blockCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>GP Location</span>,
            selector: (row: any) => row.gpLocation,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>GP Code</span>,
            selector: (row: any) => row.gpCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Site Type</span>,
            selector: (row: any) => row.siteType,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Warranty</span>,
            selector: (row: any) => row.warranty,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Requested For</span>,
            selector: (row: any) => row.requestFor,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Details</span>,
            sortable: true,
            cell: () => {
                return (
                    <Button variant="primary" className="btn-icon" onClick={() => handleOpenForm(row)}>
                            <i className="ri-information-fill "></i>
                    </Button>
                );
            },
        },
    ];

    return ( 
      <DataTable
        columns={columns}
        data={assetPortfolioData}
        pagination
      />
    );
};

export default GPAssetPortfolioTable;
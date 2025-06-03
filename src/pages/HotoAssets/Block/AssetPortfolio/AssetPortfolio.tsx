import React  from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { assetPortfolioData } from '../DemoData/demodata';

const AssetPortfolioTable = () => {
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
                    <Dropdown className="dropdown d-inline-block">
                        <Dropdown.Toggle className="btn bg-secondary-subtle btn-light arrow-none arrow-none btn-sm">
                            <i className="ri-more-fill align-middle"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            },
        },
    ];

    return ( 
      <DataTable
        columns={columns}
        data={assetPortfolioData}
        pagination
        PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
      />
    );
};

export default AssetPortfolioTable;
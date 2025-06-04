import React from 'react';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { replacemnetData } from 'pages/HotoAssets/Block/DemoData/demodata';

const GPReplacementTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Replacement ID</span>,
            selector: (row: any) => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Request Date</span>,
            selector: (row: any) => row.requestDate,
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
            name: <span className='font-weight-bold fs-sm'>GP Code</span>,
            selector: (row: any) => row.gpCode,
            sortable: true
        },
         {
            name: <span className='font-weight-bold fs-sm'>Replacemnet Reason</span>,
            selector: (row: any) => row.replacementReason,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Issue Date</span>,
            selector: (row: any) => row.issueDate,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>ETA</span>,
            selector: (row: any) => row.eta,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Initiated By</span>,
            selector: (row: any) => row.initiatedBy,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>New Serial No</span>,
            selector: (row: any) => row.newSerialNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Status</span>,
            sortable: true,
            cell: (row: any) => {
                switch (row.status) {
                    case "Not assigned":
                        return (<Badge bg="danger" className='rounded-pill'> {row.status}</Badge>);
                    case "In-transit":
                        return (<Badge bg="warning" className='rounded-pill'> {row.status}</Badge>);
                    case "Installed":
                        return (<Badge bg="success" className='rounded-pill'> {row.status}</Badge>);
                    case "Received":
                        return (<Badge bg="primary" className='rounded-pill'> {row.status}</Badge>);
                    default:
                        return (<Badge bg="success" className='rounded-pill'> {row.status}</Badge>);
                }
            },
        },
        {
            name: <span className='font-weight-bold fs-sm'>Document</span>,
            selector: (row: any) => row.document,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Remarks</span>,
            selector: (row: any) => row.remarks,
            sortable: true
        }
    ];

    return (
      <DataTable
        columns={columns}
        data={replacemnetData}
        pagination
      />
    );
};

export default GPReplacementTable;
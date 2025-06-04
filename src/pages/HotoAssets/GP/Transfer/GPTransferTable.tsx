import React from 'react';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { transferData } from 'pages/HotoAssets/Block/DemoData/demodata';

const GPTransferTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Transfer ID</span>,
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
            name: <span className='font-weight-bold fs-sm'>Transfer Type</span>,
            selector: (row: any) => row.transferType,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Transfer Form</span>,
            selector: (row: any) => row.transferForm,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Transfer To</span>,
            selector: (row: any) => row.trasnferTo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>InitiatedBy</span>,
            selector: (row: any) => row.initiatedBy,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Issue Date</span>,
            selector: (row: any) => row.issueDate,
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
        data={transferData}
        isPagination={true}
        PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
      /> 
    );
};

export default GPTransferTable;
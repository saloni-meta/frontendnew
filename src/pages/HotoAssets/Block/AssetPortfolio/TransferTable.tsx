import React from 'react';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { transferData } from '../DemoData/demodata';

const TransferTable = () => {
    const columns = [
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
            name: <span className='font-weight-bold fs-sm'>Received By</span>,
            selector: (row: any) => row.receivedBy,
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
            name: <span className='font-weight-bold fs-sm'>Remark</span>,
            selector: (row: any) => row.remark,
            sortable: true
        }
    ];

    return (
      <DataTable
        columns={columns}
        data={transferData} //tested, data is rendered
      /> 
    );
};

export default TransferTable;
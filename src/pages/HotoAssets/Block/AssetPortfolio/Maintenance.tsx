import React from 'react';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
//import { maintenanceTableData } from '../DemoData/demodata';

const MaintenanceTable = () => {
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
          sortable: true,
          selector: (row: any) => row.serialno,
        },
        {
          name: <span className='font-weight-bold fs-sm'>Vendor</span>,
          sortable: true,
          selector: (row: any) => row.vendor,
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
                case "Under-repair":
                    return (<Badge bg="warning" className='rounded-pill'> {row.status}</Badge>);
                case "Installed":
                    return (<Badge bg="success" className='rounded-pill'> {row.status}</Badge>);
                 case "Assigned":
                    return (<Badge bg="info" className='rounded-pill'> {row.status}</Badge>);
                default:
                    return (<Badge bg="success" className='rounded-pill'> {row.status}</Badge>);
            }
          },
        },
        {
          name: <span className='font-weight-bold fs-sm'>Issue Reported</span>,
          selector: (row: any) => row.issueReported,
          sortable: true
        },
    ];

    return (
      <DataTable
        columns={columns}
        //data={maintenanceTableData} tested this too, data is rendered
      /> 
    );
};

export default MaintenanceTable;
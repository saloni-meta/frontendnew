import React from 'react';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { maintenanceTableData } from 'pages/HotoAssets/Block/DemoData/demodata';

const GPMaintenanceTable = () => {
    const columns = [
        {
          name: <span className='font-weight-bold fs-sm'>SR No.</span>,
          selector: (row: any) => row.srNo,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Maintenance ID</span>,
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
          sortable: true,
          selector: (row: any) => row.serialno,
        },
        {
          name: <span className='font-weight-bold fs-sm'>GP Code</span>,
          sortable: true,
          selector: (row: any) => row.blockCode,
        },
        {
          name: <span className='font-weight-bold fs-sm'>Repair Type</span>,
          selector: (row: any) => row.repairType,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Allocated To</span>,
          selector: (row: any) => row.allocatedTo,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Assigned To</span>,
          selector: (row: any) => row.assignedTo,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Issue Reported</span>,
          selector: (row: any) => row.issueReported,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Estimated Repair Days</span>,
          selector: (row: any) => row.repairDays,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>Issue Date</span>,
          selector: (row: any) => row.issueDate,
          sortable: true
        },
        {
          name: <span className='font-weight-bold fs-sm'>ETA</span>,
          sortable: true,
          selector: (row: any) => row.eta,
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
            name: <span className='font-weight-bold fs-sm'>Document</span>,
            sortable: true,
            elector: (row: any) => row.document,
        },
        {
            name: <span className='font-weight-bold fs-sm'>Remark</span>,
            sortable: true,
            elector: (row: any) => row.remark,
        },
    ];

    return (
      <DataTable
        columns={columns}
        data={maintenanceTableData}
        pagination
        PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
      /> 
    );
};

export default GPMaintenanceTable;
import React  from 'react';
import { Button, Badge } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { assetPortfolioData } from 'pages/HotoAssets/Block/DemoData/demodata';

const AssetWiseTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Span ID</span>,
            selector: (row: any) => row.spanid,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Item Name</span>,
            selector: (row: any) => row.itemName,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Start Lat & Long</span>,
            selector: (row: any) => row.startLat,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>End Lat & Long</span>,
            selector: (row: any) => row.endLat,
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
            name: <span className='font-weight-bold fs-sm'>Assets</span>,
            sortable: true,
            cell: () => {
                return (
                    <Button type="button" className="btn btn-sm btn-primary">View</Button>
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

export default AssetWiseTable;
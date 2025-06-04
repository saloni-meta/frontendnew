import React  from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { assetPortfolioData } from 'pages/HotoAssets/Block/DemoData/demodata';

const SpanWiseTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>LinK ID</span>,
            selector: (row: any) => row.linkid,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Span ID</span>,
            selector: (row: any) => row.spanid,
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

export default SpanWiseTable;
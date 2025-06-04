import React from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { blockWiseAssetTableData } from 'pages/HotoAssets/Block/DemoData/demodata';


const GPWiseAssetTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>GP</span>,
            selector: (row: any) => row.gp,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>LGD Code</span>,
            selector: (row: any) => row.lgdCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block Location</span>,
            selector: (row: any) => row.blockLocation,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block Code</span>,
            selector: (row: any) => row.blockCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>District</span>,
            selector: (row: any) => row.district,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>District Code</span>,
            selector: (row: any) => row.districtCode,
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
        data={blockWiseAssetTableData}
        pagination
      />
              
    );
};

export default GPWiseAssetTable;
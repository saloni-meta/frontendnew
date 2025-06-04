import React from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { blockWiseAssetTableData } from '../DemoData/demodata';


const BlockWiseAssetTable = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block</span>,
            selector: (row: any) => row.block,
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
        PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
      />
              
    );
};

export default BlockWiseAssetTable;
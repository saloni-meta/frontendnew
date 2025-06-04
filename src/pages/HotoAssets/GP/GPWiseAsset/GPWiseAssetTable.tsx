import React from 'react';
import { Dropdown } from 'react-bootstrap';
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
        data={blockWiseAssetTableData}
        pagination
      />
              
    );
};

export default GPWiseAssetTable;
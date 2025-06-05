import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import BlockWiseForm from './BlockWiseForm';
import { blockWiseAssetTableData } from '../DemoData/demodata';

interface Block {
  srNo: string;
  equipment: string;
  serialNo: string;
  condition: string;
  status: string;
  siteType: string;
  warranty: string;
  requestFor: string;
  block: string;

  //form top fields
  blockLocation: string;
  district: string;
  popType: string;
  address: string;
  blockCode: string;
  districtCode: string;
  landmark: string;
  latitude: string;
  longitude: string;
};

const BlockWiseAssetTable = () => {
  const [showForm, setShowForm] = useState(false); 
  const [selectedRow, setSelectedRow] = useState<Block | null>(null);

  const handleOpenForm = (row: Block) => {
    setSelectedRow(row);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedRow(null);
  };
  
    const columns = [
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: Block) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block</span>,
            selector: (row: Block) => row.block,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block Code</span>,
            selector: (row: Block) => row.blockCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>District</span>,
            selector: (row: Block) => row.district,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>District Code</span>,
            selector: (row: Block) => row.districtCode,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Assets</span>,
            sortable: true,
            cell: (row : Block) => {
                return (
                  <Button type="button" className="btn btn-sm btn-primary" onClick={() => handleOpenForm(row)}>View</Button>
                );
            },
        },
    ];

    return (
      <div>
        <DataTable
        columns={columns}
        data={blockWiseAssetTableData}
        pagination
      />

        {showForm && selectedRow && (
          <BlockWiseForm
            show={showForm}
            onClose={handleCloseForm}
            block={selectedRow} 
          />
        )} 
      </div>
      
              
    );
};

export default BlockWiseAssetTable;
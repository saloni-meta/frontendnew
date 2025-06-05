import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { assetPortfolioData } from '../DemoData/demodata';
import EditDetailsForm from './EditDetailsForm';

interface EditDetails {
  srNo: string;
  serialNo: string;
  condition: string;
  status: string;
  warranty: string;
  make: string;
  model: string;
}

const BlockFormTable = () => {
  const[showForm, setShowForm] = useState(false);
  const[selectedRow, setSelectedRow] = useState<EditDetails | null>(null);
  const [data, setData] = useState<EditDetails[]>(assetPortfolioData);

  const handleOpenForm = (row: EditDetails) => {
    setSelectedRow(row);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedRow(null);
  };

  const handleUpdate = (updated: EditDetails) => {
    console.log("handleUpdate called here")

    setData(prev =>
      prev.map(row => row.srNo === updated.srNo ? updated : row)
    );
  };

    const columns = [
        {
            name: <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />,
            cell: () => (
                <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />
            ),
        },
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: EditDetails) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Serial No</span>,
            selector: (row: EditDetails) => row.serialNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Condition</span>,
            sortable: true,
            cell: (row: EditDetails) => {
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
            cell: (row: EditDetails) => {
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
            name: <span className='font-weight-bold fs-sm'>Warranty</span>,
            selector: (row: EditDetails) => row.warranty,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Details</span>,
            sortable: true,
            cell: (row: EditDetails) => (  
                        <Button variant="primary" className="btn-icon">
                            <i className="ri-information-fill "></i>
                        </Button>
                    
                )
        },
         {
            name: <span className='font-weight-bold fs-sm'>Actions</span>,
            sortable: true,
            cell: (row: EditDetails) => (  
                        <Button variant="primary" className="btn-icon" onClick={() => handleOpenForm(row)} aria-label="Edit details">
                            <i className="ri-pencil-fill"></i>
                        </Button>
                    
                )
        },
    ];

    return ( 
      <div>
        <DataTable
          columns={columns}
          data={assetPortfolioData}  //dummy data rendered!
        />

        {showForm && selectedRow && (
          <EditDetailsForm
            show={showForm}
            onClose={handleCloseForm}
            editDetails={selectedRow}
            onUpdate={handleUpdate} 
          />
        )} 
      </div>
      
    );
};

export default BlockFormTable;
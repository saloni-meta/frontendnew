import React, { useState, useEffect, useMemo } from 'react';
import { Container, Dropdown, Form, Row, Col, Card, Button, ToggleButton } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ScrollHorizontal = () => {
    const columns = [
        {
            name: <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />,
            cell: () => (
                <Form.Check className="fs-md" type="checkbox" name="checkAll" value="option1" />
            ),
        },
        {
            name: <span className='font-weight-bold fs-sm'>SR No.</span>,
            selector: (row: any) => row.srNo,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Equipment</span>,
            selector: (row: any) => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Serial No</span>,
            selector: (row: any) => row.purchaseId,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Condition</span>,
            sortable: true,
            cell: (row: any) => {
                switch (row.priority) {
                    case "Damaged":
                        return (<Badge bg="danger" className='rounded-pill'> {row.priority}</Badge>);
                    case "Semi-damaged":
                        return (<Badge bg="warning" className='rounded-pill'> {row.priority}</Badge>);
                    case "Robust":
                        return (<Badge bg="success" className='rounded-pill'> {row.priority}</Badge>);
                    default:
                        return (<Badge bg="success" className='rounded-pill'> {row.priority}</Badge>);
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
            name: <span className='font-weight-bold fs-sm'>Block Location</span>,
            selector: (row: any) => row.user,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Block code</span>,
            selector: (row: any) => row.assigned,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Site Type</span>,
            selector: (row: any) => row.createdBy,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Warranty</span>,
            selector: (row: any) => row.createDate,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Requested For</span>,
            selector: (row: any) => row.task,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-sm'>Details</span>,
            sortable: true,
            cell: () => {
                return (
                    <Dropdown className="dropdown d-inline-block">
                        <Dropdown.Toggle className="btn bg-secondary-subtle btn-light arrow-none arrow-none btn-sm">
                            <i className="ri-more-fill align-middle"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</Dropdown.Item>
                            <Dropdown.Item href="#!" className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</Dropdown.Item>
                            <Dropdown.Item href="#!" className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            },
        },
    ];

    const data = [
        {
            srNo: "01",
            id: "VLZ-452",
            purchaseId: "VLZ1400087402",
            title: "Post launch reminder/ post list",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "03 Oct, 2021",
            status: "Re-open",
            priority: "Damaged",
            task:"Edit customer"
        },
        {
            srNo: "02",
            id: "VLZ-453",
            purchaseId: "VLZ1400087425",
            title: "Additional Calendar",
            user: "Diana Kohler",
            assigned: "Admin",
            createdBy: "Mary Rucker",
            createDate: "05 Oct, 2021",
            status: "On-Hold",
            priority: "Semi-damaged",
            task:"Add customer"
        },
        {
            srNo: "03",
            id: "VLZ-454",
            purchaseId: "VLZ1400087438",
            title: "Make a creating an account profile",
            user: "Tonya Noble",
            assigned: "Admin",
            createdBy: "Tonya Noble",
            createDate: "27 April, 2022",
            status: "Closed",
            priority: "Semi-damaged",
            task:"Edit customer"
        },
        {
            srNo: "04",
            id: "VLZ-455",
            purchaseId: "VLZ1400087748",
            title: "Apologize for shopping Error!",
            user: "Joseph Parker",
            assigned: "Alexis Clarke",
            createdBy: "Joseph Parker",
            createDate: "14 June, 2021",
            status: "Inprogress",
            priority: "Damaged",
            task:"Get customer"
        },
        {
            srNo: "05",
            id: "VLZ-456",
            purchaseId: "VLZ1400087547",
            title: "Support for theme",
            user: "Donald Palmer",
            assigned: "Admin",
            createdBy: "Donald Palmer",
            createDate: "25 June, 2021",
            status: "Closed",
            priority: "Robust",
            task:"Delete customer"
        },
        {
            srNo: "07",
            id: "VLZ-458",
            purchaseId: "VLZ1400087785",
            title: "Change email option process",
            user: "James Morris",
            assigned: "Admin",
            createdBy: "James Morris",
            createDate: "12 March, 2022",
            status: "Open",
            priority: "Robust",
            task:"Edit customer"
        },
        {
            srNo: "08",
            id: "VLZ-460",
            purchaseId: "VLZ1400087745",
            title: "Support for theme",
            user: "Nathan Cole",
            assigned: "Nancy Martino",
            createdBy: "Nathan Cole",
            createDate: "28 Feb, 2022",
            status: "On-Hold",
            priority: "Robust",
            task:"Add customer"
        },
        {
            srNo: "09",
            id: "VLZ-461",
            purchaseId: "VLZ1400087179",
            title: "Form submit issue",
            user: "Grace Coles",
            assigned: "Admin",
            createdBy: "Grace Coles",
            createDate: "07 Jan, 2022",
            status: "New",
            priority: "Semi-damaged",
            task:"Edit customer"

        },
        {
            srNo: "10",
            id: "VLZ-462",
            purchaseId: "VLZ140008856",
            title: "Edit customer testimonial",
            user: "Freda",
            assigned: "Alexis Clarke",
            createdBy: "Freda",
            createDate: "16 Aug, 2021",
            status: "In Use",
            priority: "Semi-damaged",
            task:"Delete customer"
        },
        {
            srNo: "11",
            id: "VLZ-463",
            purchaseId: "VLZ1400078031",
            title: "Ca i have an e-copy invoice",
            user: "Williams",
            assigned: "Admin",
            createdBy: "Williams",
            createDate: "24 Feb, 2022",
            status: "Open",
            priority: "Robust",
            task:"Edit customer"
        },
        {
            srNo: "12",
            id: "VLZ-464",
            purchaseId: "VLZ1400087416",
            title: "Brand logo design",
            user: "Richard V.",
            assigned: "Admin",
            createdBy: "Richard V.",
            createDate: "16 March, 2021",
            status: "Inprogress",
            priority: "Damaged",
            task:"Get customer"
        },
        {
            srNo: "13",
            id: "VLZ-466",
            purchaseId: "VLZ1400089015",
            title: "Issue with finding information about order ?",
            user: "Olive Gunther",
            assigned: "Alexis Clarke",
            createdBy: "Schaefer",
            createDate: "32 March, 2022",
            status: "New",
            priority: "Semi-damaged",
            task:"Delete customer"

        },
        {
            srNo: "14",
            id: "VLZ-467",
            purchaseId: "VLZ1400090324",
            title: "Make a creating an account profile",
            user: "Edwin",
            assigned: "Admin",
            createdBy: "Edwin",
            createDate: "05 April, 2022",
            status: "Inprogress",
            priority: "Damaged",
            task:"Edit customer"

        },
    ];
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header className=" d-flex flex-column align-items-stretch">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-grow-1">
                        <Card.Title as="h5" className="mb-0">Block Assets</Card.Title>
                      </div>
        
                      <div className="d-flex align-items-center gap-2">
                        <Button variant="subtle-info"><i className="ph-cloud-arrow-up align-middle me-1"></i>  Export</Button>
                        <div className="search-box">
                          <Form.Control type="text" className="search" placeholder="Search" />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-2">
                        <Button variant="outline-primary" className="custom-toggle">Asset Portfolio</Button>
                        <Button variant="outline-primary">Block-Wise Assets</Button>
                      </div>
                      <div className="d-flex gap-2">
                        <Button variant="outline-primary">Maintenance</Button>
                        <Button variant="outline-primary">Replacement</Button>
                        <Button variant="outline-primary">Transfer</Button>
                      </div>
                    </div>

                  </Card.Header>
                  <Card.Body>
                    <DataTable
                      columns={columns}
                      data={data}
                      isPagination={true}
                      customPageSize={10}
                      PaginationClassName="d-flex justify-content-center justify-content-sm-end mt-2"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
        
    );
};

export default ScrollHorizontal;
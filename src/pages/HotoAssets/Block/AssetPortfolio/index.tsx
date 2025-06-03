import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { Card, Col, Row, Form, Button, Modal, OverlayTrigger, Tooltip, Table, Badge, Dropdown, Container } from 'react-bootstrap';
import  ScrollHorizontal  from './Tabledata';


const BlockAssets = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
           
                  <ScrollHorizontal />
                
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BlockAssets;


  /* return (
        <React.Fragment>
            <Col xxl={8}>
                <Card>
                    <Card.Body>
                        <Row className="gy-3">
                            <Col xl={4}>
                                <div className="search-box">
                                    <Form.Control
                                        type="text"
                                        className=" search"
                                        placeholder="Search customer, email etc..."
                                        onChange={(e: any) => handleSearchChange(e)}
                                    />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Col>
                            <Col xl={3} md={4}>
                                <div>
                                    <Form.Select
                                        className="form-control"
                                        onChange={handleSelect}>
                                        <option value="all">All Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Block">Block</option>
                                        <option value="Unactive">Unactive</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col xl={3} md={4}>
                                <Flatpickr
                                    className="form-control"
                                    id="datepicker-range"
                                    placeholder="Select date"
                                    options={{
                                        // mode: "range",
                                        mode: 'single',
                                        dateFormat: 'd M, Y',
                                    }}
                                    value={dateRange}
                                    onChange={handleDateChange}
                                />
                            </Col>
                            <Col xl={2} md={4}>
                                <Button variant='subtle-primary' className="w-100" >
                                    <i className="bi bi-funnel align-baseline me-1"></i> Filter
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="align-middle table-nowrap">
                                <tbody className="list">
                                    {
                                        (currentpages || [])?.map((item: any) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td className="id d-none"><Link to="#" className="fw-medium link-primary">13</Link></td>
                                                    <td className="customer"><div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 me-2">
                                                            <div>
                                                                <img className="avatar-xs rounded-circle customer-image-elem" alt="" src={item.img} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-base mb-0">
                                                                <Link to="#" className="text-reset customer-name-elem">{item.name}</Link>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="email">{item.email}</td>
                                                    <td className="contact">{item.phone}</td>
                                                    <td className="date">{item.date}</td>
                                                    <td className="status">
                                                        {
                                                            item.status === "Active" ?
                                                                <Badge className="bg-success-subtle text-success">{item.status}</Badge>
                                                                :
                                                                item.status === "Unactive" ?
                                                                    <Badge className="bg-secondary-subtle text-secondary">{item.status}</Badge>
                                                                    :
                                                                    <Badge className="bg-danger-subtle text-danger">{item.status}</Badge>
                                                        }
                                                    </td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as="button" className="btn btn-subtle-secondary btn-sm dropdown arrow-none">
                                                                <i className="ri-more-fill align-middle"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu as="ul">
                                                                <Dropdown.Item href="#" className="view-item-btn"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</Dropdown.Item>
                                                                <Dropdown.Item href="#" className="edit-item-btn" onClick={() => handleEditShow(item)}><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#" className="remove-item-btn" onClick={() => handleDeleteShow(item.id)} ><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                        <PaginationFile
                            className="mt-4"
                            currentpages={currentpages}
                            pagination={pagination}
                            perPageData={perPageData}
                            currentPage={currentPage}
                            pageNumbers={pageNumbers}
                            handlenextPage={handlenextPage}
                            handleClick={handleClick}
                            handleprevPage={handleprevPage}
                            estateList={customerlist}
                        />
                    </Card.Body>
                </Card>
            </Col>

            <Modal show={editcustomer} onHide={handleEditClose} centered>
                <Modal.Header className="bg-light p-3" closeButton>
                    <Modal.Title id="exampleModalLabel">Edit Customer</Modal.Title>
                </Modal.Header>
                <Form className="tablelist-form" autoComplete="off">
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <div className="position-relative d-inline-block">
                                <div className="position-absolute top-100 start-100 translate-middle">
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-$"right"`}>Select customer photo</Tooltip>
                                        }
                                    >
                                        <label htmlFor="customer-image-input" className="mb-0">
                                            <span className="avatar-xs d-inline-block">
                                                <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                    <i className="ri-image-fill"></i>
                                                </span>
                                            </span>
                                        </label>
                                    </OverlayTrigger>
                                    <Form.Control
                                        className="d-none"
                                        id="customer-image-input"
                                        type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                        name="img"
                                        onChange={handleImageChange} />

                                </div>
                                <div className="avatar-lg">
                                    <div className="avatar-title bg-light rounded-3">
                                        <img src={imgSrc} alt="" id="customer-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="customername-field">Customer Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter customer name"/>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="email-field">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"/>
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="contact-field">Contact no.</Form.Label>
                            <PatternFormat
                                className="form-control"
                                displayType="input"
                                id="phone"
                                placeholder="Enter contact no"
                                name="phone"
                                format="+(###) ##### #####"

                            />
                            
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="date-field">Joining Date</Form.Label>
                            <Flatpickr
                                className="form-control"
                                id="date"
                                name="date"
                                placeholder="Select date"
                                options={{
                                    mode: "single",
                                    dateFormat: 'd M, Y',
                                }}
                               
                            />
                          
                        </div>
                        <div>
                            <Form.Label htmlFor="status-field" >Status</Form.Label>
                            <Form.Select
                                className="form-control"
                                id="status-field"
                                name="status"
                               
                            >
                                <option value="Active">Active</option>
                                <option value="Block">Block</option>
                                <option value="Unactive">Unactive</option>
                            </Form.Select>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ display: "block" }}>
                        <div className="hstack gap-2 justify-content-end">
                            <Button variant="light" type="button" onClick={handleEditClose}>Close</Button>
                            <Button variant="success" type="submit" id="add-btn">Edit Customer</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>

            <DeleteModal show={deletecustomer} handleClose={handledeleteClose} />
        </React.Fragment >
    );
}


export default BlockAssets;
 */
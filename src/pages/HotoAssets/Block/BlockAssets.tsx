import React, { useState } from 'react';
import { Card, Col, Row, Container, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AssetPortfolioDataTable from 'pages/Components/tables/DataTables/AssetPortfolioDataTable';
import BlockWiseAssetDataTable from 'pages/Components/tables/DataTables/BlockWiseAssetDataTable';
import MaintainceDataTable from 'pages/Components/tables/DataTables/MaintainceDataTable';
import ReplacementDataTable from 'pages/Components/tables/DataTables/ReplacementDataTable';
import TransferDataTable from 'pages/Components/tables/DataTables/TransferDataTable';

const BlockAssets = () => {
  document.title = "Asset | Block";
  const [activeTab, setActiveTab] = useState('Asset Portfolio');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <React.Fragment>
       <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Row className="align-items-center g-2">
                      <Col lg={3} className="me-auto">
                        <h6 className="card-title mb-0">Block Assets</h6>
                      </Col>
                      <Col lg={2} sm={4}>
                        <div className="search-box">
                          <Form.Control
                            type="text"
                            className="search"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>
                      <Col className="col-sm-auto">
                        <div className="hstack gap-2">
                          <button className="btn btn-secondary" onClick={() => {
                            const csvLink = document.querySelector('.csv-download-link') as HTMLAnchorElement;
                            if (csvLink) {
                              csvLink.click();
                            }
                          }}>
                            <i className="bi bi-download align-baseline me-1"></i> Export
                          </button>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <div className="d-flex justify-content-center">
                          <button
                            className={`btn ${activeTab === 'Asset Portfolio' ? 'btn-primary' : 'btn-secondary'} me-2`}
                            onClick={() => setActiveTab('Asset Portfolio')}
                          >
                            Asset Portfolio
                          </button>
                          <button
                            className={`btn ${activeTab === 'Block-Wise Asset' ? 'btn-primary' : 'btn-secondary'} me-2`}
                            onClick={() => setActiveTab('Block-Wise Asset')}
                          >
                            Block-Wise Asset
                          </button>
                          <button
                            className={`btn ${activeTab === 'Maintenance Data' ? 'btn-primary' : 'btn-secondary'} me-2`}
                            onClick={() => setActiveTab('Maintenance Data')}
                          >
                            Maintenance Data
                          </button>
                          <button
                            className={`btn ${activeTab === 'Replacement Data' ? 'btn-primary' : 'btn-secondary'} me-2`}
                            onClick={() => setActiveTab('Replacement Data')}
                          >
                            Replacement Data
                          </button>
                          <button
                            className={`btn ${activeTab === 'Transfer Data' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('Transfer Data')}
                          >
                            Transfer Data
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    {activeTab === 'Asset Portfolio' && <AssetPortfolioDataTable searchTerm={searchTerm} />}
                    {activeTab === 'Block-Wise Asset' && <BlockWiseAssetDataTable searchTerm={searchTerm} />}
                    {activeTab === 'Maintenance Data' && <MaintainceDataTable />}
                    {activeTab === 'Replacement Data' && <ReplacementDataTable />}
                    {activeTab === 'Transfer Data' && <TransferDataTable />}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
      </div>
    </React.Fragment>
  )
}

export default BlockAssets;

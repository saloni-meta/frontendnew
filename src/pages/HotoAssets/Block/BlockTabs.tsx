import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import AssetPortfolioTable from "./AssetPortfolio/AssetPortfolio"
import BlockWiseAssetsTable from "./BlockWiseAssets/BlockWiseAssetsTable"
import MaintenanceTable from "./Maintenance/MaintenanceTable"
import TransferTable from "./Transfer/TransferTable"
import ReplacementsTable from "./Replacement/ReplacementTable";

/* type TabKey = "assetPortfolio" | "blockWiseAssets" | "maintenance" | "transfer" | "replacements";

const TABS: { key: TabKey; label: string }[] = [
  { key: "assetPortfolio", label: "Asset Portfolio" },
  { key: "blockWiseAssets", label: "Block-wise Assets" },
  { key: "maintenance", label: "Maintenance" },
  { key: "transfer", label: "Transfer" },
  { key: "replacements", label: "Replacements" },
]; */

const BlockTabs = () => {
  const [activeTab, setActiveTab] = useState("assetPortfolio");

  const renderTabContent = () => {
    console.log("inside renderTabConte", activeTab);
    switch (activeTab) {
      case "assetPortfolio":
        return <AssetPortfolioTable />;
      case "blockWiseAssets":
        return <BlockWiseAssetsTable />;
      case "maintenance":
        return <MaintenanceTable />;
      case "transfer":
        return <TransferTable />;
      case "replacements":
        return <ReplacementsTable />;
      default:
        return <AssetPortfolioTable />;
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="d-flex flex-column align-items-stretch">
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
                    <Button
                      variant={activeTab === 'assetPortfolio' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('assetPortfolio')}
                    >
                      Asset Portfolio
                    </Button>
                    <Button
                      variant={activeTab === 'blockWiseAssets' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('blockWiseAssets')}
                    >
                      Block-Wise Assets
                    </Button>
                  </div>
                  <div className="d-flex gap-2">
                      <Button
                      variant={activeTab === 'maintenance' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('maintenance')}
                    >
                      Maintenance
                    </Button>
                    <Button
                      variant={activeTab === 'replacements' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('replacements')}
                    >
                      Replacement
                    </Button>
                    <Button
                      variant={activeTab === 'transfer' ? 'primary' : 'outline-primary'}
                      onClick={() => setActiveTab('transfer')}
                    >
                      Transfer
                    </Button>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>{renderTabContent()}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlockTabs;

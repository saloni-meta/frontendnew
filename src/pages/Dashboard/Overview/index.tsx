import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PieChart from "pages/Dashboard/Overview/PieChart";
import ColumnChart from './ColumnChart';
import DropDownSizing from './DropdownSizing';
import BottomSimpleDonut from './BottonSimpleDonut';


const Overview = () => {
  const pieData1 = {
    title: "Total Asset - Block & GP",
    series: [18000, 8000, 8500, 1500],
    labels: ["Robust – 18,000", "Semi-Damaged – 8,000", "Damaged – 8,500", "Not Found – 1,500"]
  };

  const pieData2 = {
    title: "Total Asset - RKM",
    series: [1000, 500, 100, 400],
    labels: ["Robust – 1000", "Semi-Damaged – 500", "Damaged – 100", "Not Found – 400"]
  };

  const bottomChartsData = [
    {
      title: "Transfer",
      series: [650, 350],
      labels: ["Internal – 650", "External – 350"]
    },
    {
      title: "Not Found",
      series: [478, 172],
      labels: ["Installed – 478", "Pending – 172"]
    },
    {
      title: "Damaged",
      series: [1870, 700],
      labels: ["Replaced – 1,870", "Pending – 700"]
    },
    {
      title: "Semi-Damaged",
      series: [1200, 2200],
      labels: ["Repaired – 1,200", "Pending – 2,200"]
    }
  ];

  const columnData = [{
    title: "Total Asset - RKM",
    series: [{ name: "Assets", data: [16, 21, 13, 30] }],
    categories: ["Robust", "Semi-Damaged", "Damaged", "Not Found"]
  }, {
    title: "Asset Condition Overview Across District & Block",
    series: [{ name: "Assets", data: [16, 40, 9, 27] }],
    categories: ["Robust", "Semi-Damaged", "Damaged", "Not Found"]
  }];


  return (
   <React.Fragment>
        <div className="page-content">
            <Container fluid>
              <Row className="mb-4 g-0">
                <Col className="p-0 m-0">
                  <div className="d-flex justify-content-end">
                    <div style={{ padding: 0, margin: 0 }}>
                      <DropDownSizing />
                    </div>
                  </div>
                </Col>
              </Row>   
              <Row className="mb-4">
                <Col md={12}>
                  <PieChart {...pieData1} />
                </Col>
                <Col md={12}>
                  <PieChart {...pieData2} />
                </Col>
              </Row>
              <Row>
                {columnData.map((chart, idx) => (
                  <Col key={idx} md={12}>
                    <ColumnChart {...chart}/>
                  </Col>
                ))}
               
              </Row>
              <Row>
                {bottomChartsData.slice(0, 2).map((chart, idx) => (
                  <Col key={idx} md={6} xs={12} className="mb-4">
                    <BottomSimpleDonut {...chart} />
                  </Col>
                ))}
              </Row>
              <Row>
                {bottomChartsData.slice(2, 4).map((chart, idx) => (
                  <Col key={idx} md={6} xs={12} className="mb-4">
                    <BottomSimpleDonut {...chart} />
                  </Col>
                ))}
              </Row>
            </Container>
        </div>
    </React.Fragment>
  )
} 

export default Overview;
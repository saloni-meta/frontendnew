import React from 'react';
import { Card } from 'react-bootstrap';
import { SimpleDonut } from './Pie';
import SearchData from './SearchData';


const PieChart = ({ title, series, labels }: any) => (
  <React.Fragment>
    <div className="page">
       <Card className="h-100">
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <h5 className="mb-4">{title}</h5> 
            <SearchData />
          </div>
          <SimpleDonut series={series} labels={labels}  />
        </Card.Body>
      </Card>
    </div>
  </React.Fragment>
 
);


/* const PieChart = () => {
    document.title=" Apex Pie Charts | Steex Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb pageTitle="Apexcharts" title="Pie Charts" />
                <Row>
                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Pie Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <SimpleDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Donut Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SimpleDonut dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </React.Fragment>
    )
} */

export default PieChart;
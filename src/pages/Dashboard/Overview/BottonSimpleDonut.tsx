import React from 'react';
import { Card } from 'react-bootstrap';
import  { SimpleDonut }  from './Pie';

const BottomSimpleDonut = ({ title, series, labels }: any) => (
  <React.Fragment>
    <div className="page">
       <Card className="h-100">
        <Card.Body>
          <div style={{ display: "flex"}} >
            <h5 className="mb-4">{title}</h5> 
          </div>
          <SimpleDonut series={series} labels={labels}  />
        </Card.Body>
      </Card>
    </div>
  </React.Fragment>
 
); 


export default BottomSimpleDonut;
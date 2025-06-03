import React from 'react';
import { Card } from 'react-bootstrap';
import DistributedColumn from './Column';
import SearchData from './SearchData';

const ColumnChart = ({series, categories, title} : any) => {
  return (
   <React.Fragment>
    <div className='page'>     
        <Card>
          <Card.Header>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4 className="card-title mb-0">{title}</h4>
              <SearchData />
            </div>
          </Card.Header>
          <Card.Body>
              <DistributedColumn series={series} categories={categories} dataColors={['#00b894', '#fdcb6e', '#e17055', '#fd9644']} />
          </Card.Body>
        </Card>
    </div>
   </React.Fragment>
  )
}


export default ColumnChart;
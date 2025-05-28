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
              <DistributedColumn series={series} categories={categories} dataColors={['#51d28c', '#f7cc53', '#f34e4e', '#564ab1']} />
          </Card.Body>
        </Card>
    </div>
   </React.Fragment>
  )
}


export default ColumnChart;
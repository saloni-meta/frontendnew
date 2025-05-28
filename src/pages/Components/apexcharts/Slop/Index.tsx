import React from 'react'
import { Container } from 'react-bootstrap'
import SlopChart from './SlopChart'

const ApexSlop = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <SlopChart />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default ApexSlop
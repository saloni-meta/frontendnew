import React from 'react'
import { Container } from 'react-bootstrap'
import AnimationModals from './AnimationModals';
import DefaultVertical from './DefaultVertical';
import FullscreenResponsiveModals from './FullscreenResponsiveModals';
import GridsStatic from './GridsStatic';

import OptionalSizes from './OptionalSizes';
import ScrollableVarifying from './ScrollableVarifying';
import ToggleTooltips from './ToggleTooltips';

const Modals = () => {
  return (
    <div className="page-content">
        <Container fluid>   
            <DefaultVertical />
            <GridsStatic />
            <ToggleTooltips />
            <ScrollableVarifying />
            <OptionalSizes />
            <FullscreenResponsiveModals />
            <AnimationModals />
            
        </Container>
    </div>
  )
}

export default Modals;
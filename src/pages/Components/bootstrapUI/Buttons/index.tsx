import React from "react";
import { Container } from "react-bootstrap";
import ButtonGroupSizing from "./ButtonGroupSizing";
import ButtonsGrid from "./ButtonsGrid";
import ButtonsSizes from "./ButtonsSizes";
import ButtonsTag from "./ButtonsTag";
import ButtonsToggleStatus from "./ButtonsToggleStatus";
import ButtonsToolbar from "./ButtonsToolbar";
import ButtonsWidth from "./ButtonsWidth";
import ButtonswithLabel from "./ButtonswithLabel";
import CheckboxRadioButtons from "./Checkbox&RadioButtons";
import CustomToggleButtons from "./CustomToggleButtons";
import DefaultButtons from "./DefaultButtons";
import GhostButtons from "./GhostButtons";
import GradientButtons from "./GradientButtons";
import GroupIconButtons from "./Group&IconButtons";
import LoadMoreButtons from "./LoadMoreButtons";
import OutlineButtons from "./OutlineButtons";
import RoundedButtons from "./RoundedButtons";
import SoftButtons from "./SoftButtons";
import VerticalVariation from "./VerticalVariation";
import BaseCustom from "./BaseCustom";
import Focusring from "./Focusring";
import Focusringutilities from "./Focusringutilities";


const Button = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <DefaultButtons />
                <OutlineButtons />
                <RoundedButtons />
                <SoftButtons />
                <GhostButtons />
                <GradientButtons />
                <ButtonswithLabel />
                <LoadMoreButtons />
                <CustomToggleButtons />
                <BaseCustom />
                <ButtonsSizes />
                <ButtonsWidth />
                <ButtonsTag />
                <ButtonsToggleStatus />
                <ButtonsGrid />
                <CheckboxRadioButtons />
                <GroupIconButtons />
                <ButtonsToolbar />
                <ButtonGroupSizing />
                <VerticalVariation />
                <Focusring />
                <Focusringutilities />
            </Container>
        </div>
    )
}

export default Button;
import { Navigate } from "react-router-dom";

// Bootstrap UI

import Alerts from "pages/Components/bootstrapUI/Alert/index";
import Badges from "pages/Components/bootstrapUI/Badges/index";
import Button from "pages/Components/bootstrapUI/Buttons/index";
import Colors from "pages/Components/bootstrapUI/Colors/index";
import Cards from "pages/Components/bootstrapUI/Cards/index";
import Carousel from "pages/Components/bootstrapUI/Carousel/index";
import DropDown from "pages/Components/bootstrapUI/Dropdowns/index";
import Grid from "pages/Components/bootstrapUI/Grid/index";
import Images from "pages/Components/bootstrapUI/Images/index";
import Tabs from "pages/Components/bootstrapUI/Tabs/index";
import AccordianCollapse from "pages/Components/bootstrapUI/Accordion&Collapse/index";
import Modals from "pages/Components/bootstrapUI/Modals/index";
import Offcanvas from "pages/Components/bootstrapUI/Offcanvas/index";
import PlaceHolder from "pages/Components/bootstrapUI/Placeholder/index";
import Progress from "pages/Components/bootstrapUI/Progress/index";
import Notifications from "pages/Components/bootstrapUI/Notifications/index";
import Media from "pages/Components/bootstrapUI/MediaObject/index";
import Video from "pages/Components/bootstrapUI/EmbededVideo/index";
import Typography from "pages/Components/bootstrapUI/Typography/index";
import Lists from "pages/Components/bootstrapUI/Lists/index";
import Links from "pages/Components/bootstrapUI/Links/index";
import General from "pages/Components/bootstrapUI/General/index";
import Utilities from "pages/Components/bootstrapUI/Utilities/index";


// Forms

import BasicForm from "pages/Components/forms/basicElements/index";
import FormSelect from "pages/Components/forms/formSelect/index";
import FormCheckboxRadio from "pages/Components/forms/checkbox&radio/index";
import FormPickers from "pages/Components/forms/pickers/index";
import FormInputMask from "pages/Components/forms/inputMasks/index";
import FormAdvanced from "pages/Components/forms/advanced/index";
import FormValidation from "pages/Components/forms/validation/index";
import FormWizard from "pages/Components/forms/wizard/index";
import EditorForm from "pages/Components/forms/editors/index";
import FileUpload from "pages/Components/forms/fileUpload/index";
import FormLayout from "pages/Components/forms/formslayout/index";

// Icons 

import RemixIcons from "pages/Components/icons/remixIcon/Iconremix";
import BoxIcons from "pages/Components/icons/boxIcon/BoxIcons";
import MaterialDesign from "pages/Components/icons/materialdesignIcon/MaterialDesign";
import BootstrapIcon from "pages/Components/icons/bootstrapIcon/BootstrapIcon";
import PhosphorIcon from "pages/Components/icons/phosphorIcon/PhosphorIcon";

// ApexCharts

import ApexArea from "pages/Components/apexcharts/Area/index";
import ApexBar from "pages/Components/apexcharts/Bar";
import ApexBoxplot from "pages/Components/apexcharts/Boxplot";
import ApexBubble from "pages/Components/apexcharts/Bubble";
import ApexCandle from "pages/Components/apexcharts/Candlestick";
import ApexColumn from "pages/Components/apexcharts/Column";
import ApexHeatmap from "pages/Components/apexcharts/Heatmap";
import ApexLine from "pages/Components/apexcharts/Line";
import ApexMixed from "pages/Components/apexcharts/Mixed";
import ApexPie from "pages/Components/apexcharts/Pie";
import ApexPolar from "pages/Components/apexcharts/Polar";
import ApexRadar from "pages/Components/apexcharts/Radar";
import ApexRadialbar from "pages/Components/apexcharts/Radialbar";
import ApexScatter from "pages/Components/apexcharts/Scatter";
import ApexTimeline from "pages/Components/apexcharts/Timeline";
import ApexTreemap from "pages/Components/apexcharts/Treemap";
import FunnelCharts from "pages/Components/apexcharts/FunnelCharts";
import RangeArea from "pages/Components/apexcharts/RangeAreaCharts";

// Tables 

import BasicTables from "pages/Components/tables/BasicTable/index";
import Datatables from "pages/Components/tables/DataTables/index";
import ReactTable from "pages/Components/tables/ReactTable/index";

//Overview
import Overview from "pages/Dashboard/Overview";

//HOTO Assets
import BlockAssetsComponent from "pages/HotoAssets/Block/BlockAssets";
import GpAssets from "pages/HotoAssets/GP";
import RkmAssets from "pages/HotoAssets/RKM";
import Warehouse from "pages/HotoAssets/Warehouse";

//HOTO Warehouse
import HotoWarehouse from "pages/HotoWarehouse";

// Authentication
import ApexSlop from "pages/Components/apexcharts/Slop/Index";
import path from "path";

const authProtectedRoutes = [
    
  // OVerview
    { path: "/", exact: true ,component: <Navigate to="/overview" /> },
    { path: "*", component: <Navigate to="/overview" /> },
    { path: "/overview", name: "Overview Dashboard", component: <Overview /> },

    //HOTO assets
    { path: "/hotoassets-block", name : "Block" ,component: <BlockAssetsComponent /> },
    { path: "/hotoassets-gp", name : "GP" ,component: <GpAssets /> },
    { path: "/hotoassets-rkm", name : "RKM" ,component: <RkmAssets /> },
    { path: "/hotoassets-warehouse", name : "warehouse" ,component: <Warehouse /> },

    //HOTO warehouse
    { path: "/hotowarehouse", name : "HOTO Warehouse", component: <HotoWarehouse />},

    //user prpfile
    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    { path: "/", exact: true, name : "Navigate" ,component: <Navigate to="/overview" /> },

    //   Bootstrap UI
    //  Alerts
    { path: "/ui-alerts", name : "Alerts" ,component: <Alerts /> },

    //  Badges
    { path: "/ui-badges", name : "Badges" ,component: <Badges /> },

    //  Buttons
    { path: "/ui-buttons", name : "Button" ,component: <Button /> },

    //  Colors
    { path: "/ui-colors", name : "Colors" ,component: <Colors /> },

    //  Cards
    { path: "/ui-cards", name : "Cards" ,component: <Cards /> },

    //  Carousel
    { path: "/ui-carousel", name : "Carousel" ,component: <Carousel /> },

    //  Dropdowns
    { path: "/ui-dropdowns", name : "DropDown" ,component: <DropDown /> },

    //  Grid
    { path: "/ui-grid", name : "Grid" ,component: <Grid /> },

    //  Images
    { path: "/ui-images", name : "Images" ,component: <Images /> },

    //  Tabs
    { path: "/ui-tabs", name : "Tabs" ,component: <Tabs /> },

    //  Accordion & Collapse
    { path: "/ui-accordions", name : "AccordianCollapse" ,component: <AccordianCollapse /> },

    //  Modals
    { path: "/ui-modals", name : "Modals" ,component: <Modals /> },

    //  Offcanvas
    { path: "/ui-offcanvas", name : "Offcanvas" ,component: <Offcanvas /> },

    //  Placeholder
    { path: "/ui-placeholders", name : "PlaceHolder" ,component: <PlaceHolder /> },

    //  Progress
    { path: "/ui-progress", name : "Progress" ,component: <Progress /> },

    //  Notifications
    { path: "/ui-notifications", name : "Notifications" ,component: <Notifications /> },

    //  Media Object
    { path: "/ui-media", name : "Media" ,component: <Media /> },

    //  Embeded Video
    { path: "/ui-embed-video", name : "Video" ,component: <Video /> },

    //  Typography
    { path: "/ui-typography", name : "Typography" ,component: <Typography /> },

    //  Lists   
    { path: "/ui-lists", name : "Lists" ,component: <Lists /> },

    //  Links   
    { path: "/ui-links", name : "Links" ,component: <Links /> },

    //  General
    { path: "/ui-general", name : "General" ,component: <General /> },

    //  Utilities
    { path: "/ui-utilities", name : "Utilities" ,component: <Utilities /> },

    // Advance UI
    // SweetAlert
    // { path: "/advance-ui-sweetalerts", name : "Utilities" ,component: <Utilities /> },


    // Forms
    // Basic Elements
    { path: "/forms-elements", name : "BasicForm" ,component: <BasicForm /> },

    // Form Select
    { path: "/forms-select", name : "FormSelect" ,component: <FormSelect /> },

    // Checkboxes & Radios
    { path: "/forms-checkboxs-radios", name : "FormCheckboxRadio" ,component: <FormCheckboxRadio /> },

    // Pickers
    { path: "/forms-pickers", name : "FormPickers" ,component: <FormPickers /> },

    // Input Masks
    { path: "/forms-masks", name : "FormInputMask" ,component: <FormInputMask /> },

    // Advanced
    { path: "/forms-advanced", name : "FormAdvanced" ,component: <FormAdvanced /> },

    // Validation
    { path: "/forms-validation", name : "FormValidation" ,component: <FormValidation /> },

    // Wizard
    { path: "/forms-wizard", name : "FormWizard" ,component: <FormWizard /> },

    // Editors
    { path: "/forms-editors", name : "EditorForm" ,component: <EditorForm /> },

    // File Uploads
    { path: "/forms-file-uploads", name : "FileUpload" ,component: <FileUpload /> },

    // Form Layouts
    { path: "/forms-layouts", name : "FormLayout" ,component: <FormLayout /> },

    // Tables
    // Basic Tables
    { path: "/tables-basic", name : "BasicTables" ,component: <BasicTables /> },

    // React Tables
    { path: "/tables-react", name : "ReactTable" ,component: <ReactTable /> },

    // Data Tables
    { path: "/tables-datatables", name : "Datatables" ,component: <Datatables /> },

    // ApexCharts
    // Line
    { path: "/charts-apex-line", name : "ApexLine" ,component: <ApexLine /> },

    // Area
    { path: "/charts-apex-area", name : "ApexArea" ,component: <ApexArea /> },

    // Column
    { path: "/charts-apex-column", name : "ApexColumn" ,component: <ApexColumn /> },

    // Bar
    { path: "/charts-apex-bar", name : "ApexBar" ,component: <ApexBar /> },

    // Mixed
    { path: "/charts-apex-mixed", name : "ApexMixed" ,component: <ApexMixed /> },

    // Timeline
    { path: "/charts-apex-timeline", name : "ApexTimeline" ,component: <ApexTimeline /> },

    // Candlestick
    { path: "/charts-apex-candlestick", name : "ApexCandle" ,component: <ApexCandle /> },

    // Boxplot
    { path: "/charts-apex-boxplot", name : "ApexBoxplot" ,component: <ApexBoxplot /> },

    // Bubble
    { path: "/charts-apex-bubble", name : "ApexBubble" ,component: <ApexBubble /> },

    // Scatter
    { path: "/charts-apex-scatter", name : "ApexScatter" ,component: <ApexScatter /> },

    // Heatmap
    { path: "/charts-apex-heatmap", name : "ApexHeatmap" ,component: <ApexHeatmap /> },

    // Treemap
    { path: "/charts-apex-treemap", name : "ApexTreemap" ,component: <ApexTreemap /> },

    // Pie
    { path: "/charts-apex-pie", name : "ApexPie" ,component: <ApexPie /> },

    // Radialbar
    { path: "/charts-apex-radialbar", name : "ApexRadialbar" ,component: <ApexRadialbar /> },

    // Radar
    { path: "/charts-apex-radar", name : "ApexRadar" ,component: <ApexRadar /> },

    // Polar Area
    { path: "/charts-apex-polar", name : "ApexPolar" ,component: <ApexPolar /> },

    // slop
    { path: "/charts-apex-slope", name : "ApexSlop" ,component: <ApexSlop /> },
    
    //Funnel chart 
    { path : "/charts-apex-funnel", name : "Funnel", component : <FunnelCharts />},

    // range
    { path : "/charts-apex-range-area", name : "RangeArea", component : <RangeArea />},

    // Icons
    // Remix Icon
    { path: "/icons-remix", name : "RemixIcons" ,component: <RemixIcons /> },

    // Boxicons Icon
    { path: "/icons-boxicons", name : "BoxIcons" ,component: <BoxIcons /> },

    // Material Design Icon
    { path: "/icons-materialdesign", name : "MaterialDesign" ,component: <MaterialDesign /> },

    // Bootstrap Icon
    { path: "/icons-bootstrap", name : "BootstrapIcon" ,component: <BootstrapIcon /> },

    // Phosphor Icon
    { path: "/icons-phosphor", name : "PhosphorIcon" ,component: <PhosphorIcon /> },

];

const publicRoutes = [
    // Authentication

    
    // { path: "/login", component: <Login /> },

];

export { authProtectedRoutes, publicRoutes };
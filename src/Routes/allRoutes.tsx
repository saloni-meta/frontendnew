import { Navigate } from "react-router-dom";

//Overview
import Overview from "pages/Dashboard/Overview";

//HOTO Assets
import BlockAssets from "pages/HotoAssets/Block/index";
import GpAssets from "pages/HotoAssets/GP/index";
import RKMModule from "pages/HotoAssets/RKM/index";
import Warehouse from "pages/HotoAssets/Warehouse";

//Assets-Block Form
import AssetForm from "pages/HotoAssets/Block/AssetPortfolio/AssetForm";
import BlockWiseForm from "pages/HotoAssets/Block/BlockWiseAssets/BlockWiseForm";

//Assets-GP Form
import GPAssetForm from "pages/HotoAssets/GP/AssetPortfolio/GPAssetForm";


//HOTO Warehouse
import HotoWarehouse from "pages/HotoWarehouse";
import { components } from "react-select";



const authProtectedRoutes = [
    
  // OVerview
    { path: "/", exact: true ,component: <Navigate to="/overview" /> },
    { path: "/asset/:srNo", name: "AssetForm", component: <AssetForm /> },
    { path: "/block/:srNo", name: "BlockWiseForm", component: <BlockWiseForm />},
    { path: "/gpasset/:srNo", name: "GPAssetForm", component: <GPAssetForm />},
    { path: "*", component: <Navigate to="/overview" /> },
    { path: "/overview", name: "Overview Dashboard", component: <Overview /> },

    //HOTO assets
    { path: "/hotoassets-block", name : "Block" ,component: <BlockAssets /> },
    { path: "/hotoassets-gp", name : "GP" ,component: <GpAssets /> },
    { path: "/hotoassets-rkm", name : "RKM" ,component: <RKMModule /> },
    { path: "/hotoassets-warehouse", name : "warehouse" ,component: <Warehouse /> },

    //HOTO warehouse
    { path: "/hotowarehouse", name : "HOTO Warehouse", component: <HotoWarehouse />},

    //user prpfile
    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    { path: "/", exact: true, name : "Navigate" ,component: <Navigate to="/overview" /> },


];

const publicRoutes = [
    // Authentication

    
    // { path: "/login", component: <Login /> },

];

export { authProtectedRoutes, publicRoutes };
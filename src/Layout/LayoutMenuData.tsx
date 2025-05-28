import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isOverView, setIsOverview] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false);
    const [isAsset, setIsAsset] = useState(false);
    const [isHotoWarehouse, setIsHotoWarehouse] = useState(false);

    // Components
    const [isBootstrapUi, setIsBootstrapUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    /* function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    } */
    /* useEffect(() => {
        document.body.classList.remove('twocolumn-panel');

        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Ecommerce') {
            setIsEcommerce(false);
        }
        if (iscurrentState !== 'Learning') {
            setIsLearning(false);
        }
        if (iscurrentState !== 'Invoice') {
            setIsInvoice(false);
        }
        if (iscurrentState !== 'Support Ticket') {
            setIsSupportTicket(false);
        }
        if (iscurrentState !== 'Real Estate') {
            setIsRealEstate(false);
        }
        if (iscurrentState !== 'Authentication') {
            setIsAuthentication(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Bootstrap UI') {
            setIsBootstrapUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Custom UI') {
            setIsCustomUi(false);
        }
        if (iscurrentState !== 'Widgets') {
            setIsWidgets(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }

        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }
        // if (iscurrentState !== 'Sellers') {
        //     setIsSellers(false);
        // }
        if (iscurrentState !== 'Shipping') {
            setIsShipping(false);
        }
        if (iscurrentState !== 'Localization') {
            setIsLocalization(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
    }, [
        iscurrentState,
        isDashboard,
        isLearning,
        isRealEstate,
        isEcommerce,
        isSupportTicket,
        isOrder,
        isInvoice,
        isShipping,
        isLocalization,
        isAuth,
        isMultiLevel,
        isAuthentication,
        isPages,
        isBootstrapUi,
        isAdvanceUi,
        isWidgets,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps
    ]); */

    const menuItems: any = [
        {
          id: "overview",
          label: "Overview",
          link: "/overview",
          parentId: "overview",
        },
        {
            label: "HOTO assets",
            isHeader: true,
        },
        {
            id: "assets",
            label: "Assets",
            icon: "ph-gauge",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAsset(!isAsset);
                setIscurrentState('Asset');
                //updateIconSidebar(e);
            },
            stateVariables: isAsset,
            subItems: [
                {
                    id: "block",
                    label: "Block",
                    link: "/hotoassets-block",
                    parentId: "assets",
                },
                {
                    id: "gp",
                    label: "GP",
                    link: "/hotoassets-gp",
                    parentId: "assets",
                },
                {
                    id: "rkm",
                    label: "RKM",
                    link: "/hotoassets-rkm",
                    parentId: "assets",
                },
                {
                    id: "warehouse",
                    label: "Warehouse",
                    link: "/hotoassets-warehouse",
                    parentId: "assets",
                },
            ],
        },
        {
          id: "hotowarehouse",
          label: "HOTO Warehouse",
          icon: "ph-bandaids",
          link: "/hotowarehouse",
          click: function (e: any) {
              e.preventDefault();
              setIsHotoWarehouse(!isHotoWarehouse);
              setIscurrentState('HOTO Warehouse');
              //updateIconSidebar(e);
          }
        },
        {
            label: "Components",
            isHeader: true,
        },
        {
            id: "bootstrapui",
            label: "Bootstrap UI",
            icon: "ph-bandaids",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsBootstrapUi(!isBootstrapUi);
                setIscurrentState('Bootstrap UI');
                //updateIconSidebar(e);
            },
            stateVariables: isBootstrapUi,
            subItems: [
                {
                    id: "alerts",
                    label: "Alerts",
                    link: "/ui-alerts",
                    parentId: "boostrapui",
                },
                { id: 2, label: "Badges", link: "/ui-badges", parentId: "boostrapui" },
                { id: 3, label: "Buttons", link: "/ui-buttons", parentId: "boostrapui" },
                { id: 4, label: "Colors", link: "/ui-colors", parentId: "boostrapui" },
                { id: 5, label: "Cards", link: "/ui-cards", parentId: "boostrapui" },
                { id: 6, label: "Carousel", link: "/ui-carousel", parentId: "boostrapui" },
                { id: 7, label: "Dropdowns", link: "/ui-dropdowns", parentId: "boostrapui" },
                { id: 8, label: "Grid", link: "/ui-grid", parentId: "boostrapui" },
                { id: 9, label: "Images", link: "/ui-images", parentId: "boostrapui" },
                { id: 10, label: "Tabs", link: "/ui-tabs", parentId: "boostrapui" },
                { id: 11, label: "Accordions & Collapse", link: "/ui-accordions", parentId: "boostrapui" },
                { id: 12, label: "Modals", link: "/ui-modals", parentId: "boostrapui" },
                { id: 13, label: "Offcanvas", link: "/ui-offcanvas", parentId: "boostrapui" },
                { id: 14, label: "Placeholder", link: "/ui-placeholders", parentId: "boostrapui" },
                { id: 15, label: "Progress", link: "/ui-progress", parentId: "boostrapui" },
                { id: 16, label: "Notifications", link: "/ui-notifications", parentId: "boostrapui" },
                { id: 17, label: "Media Object", link: "/ui-media", parentId: "boostrapui" },
                { id: 18, label: "Embed Video", link: "/ui-embed-video", parentId: "boostrapui" },
                { id: 19, label: "Typography", link: "/ui-typography", parentId: "boostrapui" },
                { id: 20, label: "Lists", link: "/ui-lists", parentId: "boostrapui" },
                { id: 21, label: "Links", link: "/ui-links", parentId: "boostrapui" },
                { id: 22, label: "General", link: "/ui-general", parentId: "boostrapui" },
                { id: 23, label: "Utilities", link: "/ui-utilities", parentId: "boostrapui" },


            ],
        },
        {
            id: "widgets",
            label: "Widgets",
            icon: "ph-paint-brush-broad",
            link: "/widgets",
        },
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                //updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                {
                    id: "basicElements",
                    label: "Basic Elements",
                    link: "/forms-elements",
                    parentId: "forms",
                },
                { id: 2, label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: 3, label: "Checkbox & Radio", link: "/forms-checkboxs-radios", parentId: "forms" },
                { id: 4, label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: 5, label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: 6, label: "Form Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: 7, label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: 8, label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: 9, label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: 10, label: "File Upload", link: "/forms-file-uploads", parentId: "forms" },
                { id: 11, label: "Form Layout", link: "/forms-layouts", parentId: "forms" },
            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "ph-table",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                //updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                {
                    id: "basicTables",
                    label: "Basic Tables",
                    link: "/tables-basic",
                    parentId: "tables",
                },
                { id: 2, label: "React Tables", link: "/tables-react", parentId: "tables" },
                { id: 3, label: "Datatables", link: "/tables-datatables", parentId: "tables" },
            ],
        },
        {
            id: "apexcharts",
            label: "Apexcharts",
            icon: "ph-chart-pie-slice",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                //updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "line",
                    label: "Line",
                    link: "/charts-apex-line",
                    parentId: "apexcharts",
                },
                { id: 2, label: "Area", link: "/charts-apex-area", parentId: "apexcharts" },
                { id: 3, label: "Column", link: "/charts-apex-column", parentId: "apexcharts" },
                { id: 4, label: "Bar", link: "/charts-apex-bar", parentId: "apexcharts" },
                { id: 5, label: "Mixed", link: "/charts-apex-mixed", parentId: "apexcharts" },
                { id: 6, label: "Timeline", link: "/charts-apex-timeline", parentId: "apexcharts" },
                { id: 7, label: "Range Area", link: "/charts-apex-range-area", parentId: "apexcharts" },
                { id: 8, label: "Funnel", link: "/charts-apex-funnel", parentId: "apexcharts" },
                { id: 9, label: "Candlestick", link: "/charts-apex-candlestick", parentId: "apexcharts" },
                { id: 10, label: "Boxplot", link: "/charts-apex-boxplot", parentId: "apexcharts" },
                { id: 11, label: "Bubble", link: "/charts-apex-bubble", parentId: "apexcharts" },
                { id: 12, label: "Scatter", link: "/charts-apex-scatter", parentId: "apexcharts" },
                { id: 13, label: "Heatmap", link: "/charts-apex-heatmap", parentId: "apexcharts" },
                { id: 14, label: "Treemap", link: "/charts-apex-treemap", parentId: "apexcharts" },
                { id: 15, label: "Pie", link: "/charts-apex-pie", parentId: "apexcharts" },
                { id: 16, label: "Radialbar", link: "/charts-apex-radialbar", parentId: "apexcharts" },
                { id: 17, label: "Radar", link: "/charts-apex-radar", parentId: "apexcharts" },
                { id: 18, label: "Polar", link: "/charts-apex-polar", parentId: "apexcharts" },
                { id: 19, label: "Slop", link: "/charts-apex-slope", parentId: "apexcharts" },
            ],
        },
        {
            id: "icons",
            label: "Icons",
            icon: "ph-traffic-cone",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIscurrentState('Icons');
                //updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                {
                    id: "remix",
                    label: "Remix",
                    link: "/icons-remix",
                    parentId: "icons",
                },
                { id: 2, label: "BoxIcons", link: "/icons-boxicons", parentId: "icons" },
                { id: 3, label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
                { id: 4, label: "Bootstrap", link: "/icons-bootstrap", parentId: "icons" },
                { id: 5, label: "Phosphor", link: "/icons-phosphor", parentId: "icons" },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;
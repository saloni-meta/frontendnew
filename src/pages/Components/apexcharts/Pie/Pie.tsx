import React, { useEffect } from 'react';
import getChartColorsArray from "../../../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

//Import images
import smallImage1 from 'assets/images/small/img-1.jpg';
import smallImage2 from 'assets/images/small/img-2.jpg';
import smallImage3 from 'assets/images/small/img-3.jpg';
import smallImage4 from 'assets/images/small/img-4.jpg';

const SimplePie = ({ dataColors }: any) => {
    var chartPieBasicColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 55, 13, 43, 22];
    var options: any = {
        chart: {
            height: 300,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartPieBasicColors
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height={267.7}
        />
    );
};

const SimpleDonut = ({ dataColors }: any) => {
    var chartDonutBasicColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 55, 41, 17, 15];
    var options: any = {
        chart: {
            height: 300,
            type: 'donut',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartDonutBasicColors
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={267.7}
        />

    );
};

const UpdateDonut = ({ dataColors }: any) => {
    var chartDonutupdatingColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 55, 13, 33];
    var options: any = {
        chart: {
            height: 280,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom'
        },
        colors: chartDonutupdatingColors
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={267.7}
        />

    );
};

const MonochromePie = () => {
    // var chartMonochromeColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [25, 15, 44, 55, 41, 17];
    var options: any = {

        chart: {
            height: 300,
            type: 'pie',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
            monochrome: {
                enabled: true,
                color: 'rgb(55, 98, 234)',
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            }
        },
        title: {
            text: "Monochrome Pie",
            style: {
                fontWeight: 500,
            },
        },
        dataLabels: {
            formatter: function (val: any, opts: any) {
                var name = opts.w.globals.labels[opts.seriesIndex];
                return [name, val.toFixed(1) + '%'];
            },
            dropShadow: {
                enabled: false,
            }
        },
        legend: {
            show: false
        }
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height={287.7}
        />

    );
};

const GradientDonut = ({ dataColors }: any) => {
    var chartPieGradientColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 55, 41, 17, 15];
    var options: any = {

        chart: {
            height: 300,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'bottom',
            formatter: function (val: any, opts: any) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            }
        },
        title: {
            text: 'Gradient Donut with custom Start-angle',
            style: {
                fontWeight: 500,
            },
        },
        colors: chartPieGradientColors
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={267.7}
        />

    );
};

const PatternedDonut = ({ dataColors }: any) => {
    var chartPiePatternColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 55, 41, 17, 15];
    var options: any = {
        chart: {
            height: 300,
            type: 'donut',
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
            }
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true
                        }
                    }
                }
            }
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 0.8
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        theme: {
            palette: 'palette2'
        },
        title: {
            text: "Favourite Movie Type",
            style: {
                fontWeight: 500,
            },
        },
        legend: {
            position: 'bottom'
        },
        colors: chartPiePatternColors
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={267.7}
        />

    );
};

const ImagePieChart = ({ dataColors }: any) => {
    var chartPieImageColors = getChartColorsArray(dataColors);

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const series = [44, 33, 54, 45];
    const options: any = {
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: chartPieImageColors,
        fill: {
            type: 'image',
            opacity: 0.85,

            image: {
                src: [smallImage1, smallImage2, smallImage3, smallImage4],
                width: 25,
                imagedHeight: 25
            },

        },
        stroke: {
            width: 4
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height={267.7}
        />

    );
};

export { SimplePie, SimpleDonut, UpdateDonut, MonochromePie, GradientDonut, PatternedDonut, ImagePieChart };
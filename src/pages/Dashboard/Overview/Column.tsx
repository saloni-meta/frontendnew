import React, { useEffect } from 'react';
import getChartColorsArray from 'Common/ChartsDynamicColor';
import Chart from 'react-apexcharts';
import { createSelector } from 'reselect';
import ApexCharts from 'apexcharts';
import { useSelector } from 'react-redux';

const DistributedColumn = ({ series, categories, dataColors }: any) => {
    //var chartColumnDistributedColors = getChartColorsArray(dataColors);
    const chartColors = dataColors || ['#51d28c', '#f7cc53', '#f34e4e', '#564ab1', '#5fd0f3'];

    // chart re-render
    const selectLayoutThemeType = createSelector(
        (state: any) => state.Layout,
        (layoutThemeType) => layoutThemeType.layoutThemeType
    );

    const layoutThemeType = useSelector(selectLayoutThemeType);

    useEffect(() => {
        document.getElementsByClassName('apex-charts');
    }, [layoutThemeType]);

    const options: any = {
        chart: {
            height: 350,
            type: 'bar',
        },
        colors: chartColors,
        plotOptions: {
            bar: {
                columnWidth: '15%',
                distributed: true,
                barGroupPadding: 0.05 
            }
        },
        stroke: {
            colors: ['transparent'],
            width: 2,    
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    colors: chartColors,
                }
            }
        }
    };

    return <Chart dir="ltr" className="apex-charts" series={series} options={options} type="bar" height={350} />;
};

export default DistributedColumn;
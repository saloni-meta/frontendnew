import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { createSelector } from 'reselect'
import { useSelector } from 'react-redux';

const DistributedColumn = ({ series, categories, dataColors }: any) => {
    //var chartColumnDistributedColors = getChartColorsArray(dataColors);
    const chartColors = dataColors || ['#00b894', '#fdcb6e', '#e17055', '#fd9644'];

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
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';


const SimpleDonut = ({ series, labels, dataColors } : any) => {
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

    
    /* var options: any = {
        chart: {
            height: 300,
            type: 'donut',
        },
        labels: ['Total - 35,000', 'Robust - 18,000', 'Damaged - 8,500', 'Semi-Damaged - 8,000', 'Not Found - 1,500'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartDonutBasicColors
    }; */

    const options = {
      chart: { type: 'donut', height: 300 },
      labels: labels,
      legend: { position: 'bottom' },
      colors: chartColors,
      dataLabels: { dropShadow: { enabled: false } },
    };

    return (
      <Chart
        options={options}
        series={series}
        type="donut"
        height={300}
        className="apex-charts"
      />
    );

    /* return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={267.7}
        />

    ); */
};


export { SimpleDonut };

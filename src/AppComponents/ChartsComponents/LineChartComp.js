import Chart from "react-google-charts";
import React from "react";

const LineChartComp = ({fish}) => {
    return(
        <Chart
            width={'100%'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={fish}
            options={{
                width: 1200,
                title: '',
                titleTextStyle: {
                    color: 'grey',
                    fontSize: 24,
                    fontStyle: 'Roboto',
                    bold: false,

                },
                hAxis: {
                    title: 'Дни', //
                },
                vAxis: {
                    title: 'Значение', //
                },
                colors: ['#009662'],
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default LineChartComp;
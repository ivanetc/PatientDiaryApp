import Chart from "react-google-charts";
import React from "react";

const LineChartComp = ({fish}) => {
    return(
        <Chart
            width="1000px"
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={fish}
            options={{
                title: 'Статистика',
                titleTextStyle: {
                    color: 'grey',
                    fontSize: 24,
                    fontStyle: 'Roboto',
                    bold: false,

                },
                hAxis: {
                    title: 'Time', //
                },
                vAxis: {
                    title: 'Popularity', //
                },
                colors: ['#009662'],
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default LineChartComp;
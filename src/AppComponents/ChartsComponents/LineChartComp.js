import Chart from "react-google-charts";
import React from "react";

const LineChartComp = ({}) => {
    return(
        <Chart
            width="1000px"
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['x', 'dogs'],
                ['25 мая', 0],
                [1, 10],
                [2, 23],
                [3, 17],
                [4, 18],
                [5, 9],
                [6, 11],
                [7, 27],
                [8, 33],
                [9, 40],
                [10, 32],
                [11, 35],
            ]}
            options={{
                title: 'Статистика',
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
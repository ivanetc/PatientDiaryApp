import React from "react";
import Header from "./HeaderComponent";
import Chart from "react-google-charts";
import Paper from "@material-ui/core/Paper";

const СalendarChartComp = ({}) => {
     return (
         <Chart
             //width={1000}
             chartType="Calendar" //неизменяемая хрень
             loader={<div>Loading Chart</div>} //
             data={[
                [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                [new Date(2020, 1, 4), 1],
                [new Date(2020, 1, 5), 1],
                [new Date(2020, 1, 12), 0],
                [new Date(2020, 1, 13), 1],
                [new Date(2020, 1, 19), 0],
                [new Date(2020, 1, 23), 1],
                [new Date(2020, 1, 24), 0],
                [new Date(2020, 2, 10), 1],
             ]}
             options={{
             title: 'Календарь', //название
             }}
             rootProps={{ 'data-testid': '1' }}
             />
      );
 }

const LineChartComp = ({}) => {
    return(
        <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['x', 'dogs'],
                [0, 0],
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
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}

function CalendarComponent() {
    let html =
        <div className="app_body">
            <Paper className="all_charts">
                <div className="title_charts">Календарь и статистика</div>
                <div className="calendar_charts_field"><СalendarChartComp /></div>
                <div className="line_charts_field"><LineChartComp /></div>
            </Paper>
        </div>;


    return html;
}
export default CalendarComponent;
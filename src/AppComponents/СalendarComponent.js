import React from "react";
import Header from "./HeaderComponent";
import Chart from "react-google-charts";
import Paper from "@material-ui/core/Paper";
import {red} from "@material-ui/core/colors";
import СalendarChartComp from "./ChartsComponents/СalendarChartComp";
import LineChartComp from "./ChartsComponents/LineChartComp";

function CalendarComponent() {
    let html =
        <div>
            <Header/>
            <Paper className="all_charts">
                <div className="title_charts">Календарь и статистика</div>
                <div className="calendar_charts_field"><СalendarChartComp /></div>
                <div className="line_charts_field"><LineChartComp /></div>
            </Paper>
        </div>;

    return html;
}
export default CalendarComponent;
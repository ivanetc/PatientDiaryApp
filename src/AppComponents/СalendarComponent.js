import React from "react";
import Header from "./HeaderComponent";
import Chart from "react-google-charts";
import Paper from "@material-ui/core/Paper";
import {red} from "@material-ui/core/colors";
import СalendarChartComp from "./ChartsComponents/СalendarChartComp";
import LineChartComp from "./ChartsComponents/LineChartComp";
import Data from "../DataClasses/Data";

function CalendarComponent() {
    let fishCal = Data.Data.getCalendarStatistic();

    let fishLine = Data.Data.getSurveyStatistic(0, 1); //я не знаю, откуда я беру userID и surveyId, поэтому временно                                                     беру кастомные

    let html =
        <div className="app_body">
            <Paper className="all_charts">
                <div className="title_charts">Календарь и статистика</div>
                <div className="calendar_charts_field">
                    <СalendarChartComp fish={fishCal}/>
                </div>
                <div className="line_charts_field"><LineChartComp fish={fishLine} /></div>
            </Paper>
        </div>;

    return html;
}
export default CalendarComponent;
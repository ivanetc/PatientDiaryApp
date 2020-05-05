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
                <div className="title_calendar">Календарь ухода</div>
                <div className="calendar_charts_field">
                    <СalendarChartComp fish={fishCal}/>
                </div>
                <div className="all_cube_field">
                    <div className="firstcube"><div className="cube_field"></div><div className="name_cube_field">День пропущен</div></div>
                    <div className="secondcube"><div className="cube_field"></div><div className="name_cube_field">План на день не заполнялся</div></div>
                    <div className="thirdcube"><div className="cube_field"></div><div className="name_cube_field">План на день заполнен не полностью</div></div>
                    <div className="fourthcube"><div className="cube_field"></div><div className="name_cube_field">План на день заполнен полностью</div></div>
                </div>
                <div className="title_line">Статистика состояния</div>
                <div className="line_charts_field"><LineChartComp fish={fishLine} /></div>
            </Paper>
        </div>;

    return html;
}
export default CalendarComponent;
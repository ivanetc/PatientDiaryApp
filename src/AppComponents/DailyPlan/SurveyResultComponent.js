import React from "react";
import '../../index.scss'
import Paper from "@material-ui/core/Paper";
import Survey from "../../DataClasses/survey";
import Data from "../../DataClasses/Data"

function SurveyResultComponent(props) {

    const surveyId = props.match.params.id;
    const AllSurveys = Survey.Survey;
    let currentSurvey = AllSurveys[surveyId];
    let html =
        <div>
            <Paper className="all_profile_content">
                <div className="profile_header">Опрос "{currentSurvey.name}" завершен</div>
                <span className="survey_result_description">Результат опроса: {props.match.params.result}</span>
                <p className="survey_result_description">{Data.Data.getSurveyDecoding(surveyId)}</p>

            </Paper>
        </div>;
    return html;
}

export default SurveyResultComponent;
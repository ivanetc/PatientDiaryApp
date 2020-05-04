import React from "react";
import '../../index.scss'
import Paper from "@material-ui/core/Paper";
import Survey from "../../DataClasses/survey";

function SurveyResultComponent(props) {
    const surveyId = props.match.params.id;
    const AllSurveys = Survey.Survey;
    let currentSurvey = AllSurveys[surveyId];
    let html =
        <div>
            <Paper className="all_profile_content">
                <div className="profile_header">Опрос "{currentSurvey.name}" завершен</div>
                <span className="survey_result_description">Результат опроса: {props.match.params.result}</span>

            </Paper>
        </div>;
    return html;
}

export default SurveyResultComponent;
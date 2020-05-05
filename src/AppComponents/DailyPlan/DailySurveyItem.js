import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import history from "../../history";

function DailySurveyItem({surveyName, surveyId, surveyDisabled}) {
    let buttonLabel = surveyDisabled ? "Пройден" : "Пройти";
    let line_through_style = {
        textDecoration:"line-through"
    };
    let normal_style = {
        textDecoration:"none"
    };

    let html =
        <div className="DailySurveyItem">
            <a style={surveyDisabled ? line_through_style : normal_style}>{surveyName}</a>
                <Button
                    onClick={() => {history.push("/daily_plan/survey" + surveyId)}}
                    disabled={surveyDisabled}
                    size="small"
                    variant="contained"
                    color={surveyDisabled ? "primary":"secondary" }>
                        {buttonLabel}
                </Button>
        </div>;



    // function getLinkStart(disable){
    //     if (!disable)
    //         return <Link to={ "/daily_plan/survey" + surveyId }>
    // }


    return html;
}

export default DailySurveyItem;

function buttonClick(history, surveyId) {
    history.push("/daily_plan/survey" + surveyId);

}
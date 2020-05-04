import React from "react";
import Button from "@material-ui/core/Button";

function DailySurveyItem({surveyName, surveyId, surveyDisabled}) {
    let buttonLabel = surveyDisabled ? "Пройден" : "Пройти";
    let html =
        <div className="DailySurveyItem">
            <a>{surveyName}</a>
            <Button disabled={surveyDisabled} href={"/daily_plan/survey" + surveyId} size="small" variant="contained" color="secondary">
                {buttonLabel}
            </Button>
        </div>;

    return html;
}

export default DailySurveyItem;
import React from "react";
import Button from "@material-ui/core/Button";

function DailySurveyItem({surveyName, surveyId}) {
    let html =
        <div className="DailySurveyItem">
            <a>{surveyName}</a>
            <Button href={"/daily_plan/survey" + surveyId} size="small" variant="contained" color="secondary">
                Пройти
            </Button>
        </div>;

    return html;
}

export default DailySurveyItem;
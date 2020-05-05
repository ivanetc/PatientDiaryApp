import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Data from "../DataClasses/Data";
import DailySurveyItem from "./DailyPlan/DailySurveyItem";
import DailyPlanForm from "./DailyPlan/DailyPlanForm";

function DailyPlanComponent() {
    const section = {
        minHeight: "95%",
    };
    let userId = 0;
    let user = Data.Data.getUserProfile(userId);

    console.log("USER");
    console.log(user);

    let fullDailyPlan = Data.Data.getDailyPlan(userId);
    let {dailyPlan, dailySurveys} = parseFullDailyPlan(fullDailyPlan);
    let surveyComponents = dailySurveys.map(survey =>
        <DailySurveyItem
            surveyName={survey.text}
            surveyId={survey.surveyId}
            surveyDisabled={Data.Data.checkSurvey(userId, survey.surveyId)}
        />
    );

    let html =
        <div className="BodyDiv app_body">
            <Grid
                className="DayItemsContainer"
                alignItems="stretch"
                direction="row"
                justify="center"
                container
                spacing={3}
            >
                <Grid style={section} item xs={6}>
                    <Paper className="DayItem">
                        <h2 className="profile_header">План дня</h2>
                        <DailyPlanForm userId={userId} plan={dailyPlan}/>
                    </Paper>
                </Grid>
                <Grid style={section} item xs={5}>
                    <Paper className="DayItem">
                        <h2 className="profile_header">Опросы на день</h2>
                        {surveyComponents}
                    </Paper>
                </Grid>
            </Grid>
        </div>;


    return html;
}


function parseFullDailyPlan(fullDailyPlan) {
    let dailyPlan = [];
    let dailySurveys = [];

    for (let planId in fullDailyPlan) {
        let planItem = fullDailyPlan[planId];
        planItem.id = planId;
        if (planItem.type === "survey")
            dailySurveys.push(planItem);
        else
            dailyPlan.push(planItem);
    }
    return {dailyPlan, dailySurveys};
}
export default DailyPlanComponent;
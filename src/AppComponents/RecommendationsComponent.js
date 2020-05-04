import React from 'react';
import '../index.scss'

import Data from "../DataClasses/Data.js";
import Header from "./HeaderComponent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


function RecommendationsComponent() {
    let user = Data.Data.getUserProfile(1);
    let careId = user.careId;
    let recommendations = Data.Data.getRecommendations(careId);

    return (
        <div >
            <Header/>
            <div className="ComponentBody">
                <h1>{user.care}. Рекомендации.</h1>
                <Grid className="RecommendationContainer" container spacing={3}>
                    <Grid item xs={3}>
                        <div className="RecommendationItem GreenContainer">
                            <h2>Полезные ресурсы</h2>
                            <a href="https://pro-palliativ.ru">Про Паллиатив</a>
                            <a href="https://www.youtube.com/channel/UCmMFZV1ZybknauJayLOWvQg">Мастерская заботы</a>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className="RecommendationItem">xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="RecommendPaperClass">xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="RecommendationItem RedContainer">
                            <h2>Важные телефоны</h2>
                            <span>Горячая линия</span>
                            <span>8-800-555-35-35</span>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default RecommendationsComponent;
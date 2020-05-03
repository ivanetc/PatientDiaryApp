import React from 'react';
import '../index.scss'

import Data from "../DataClasses/Data.js";
import Header from "./HeaderComponent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


function RecommendationsComponent() {
    let user = Data.Data.getUserProfile(1);
    return (
        <div >
            <Header/>
            <div className="ComponentBody">
                <h1>Рекомендации</h1>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <div className="RecommendationItem">
                            <h2>Полезные ресурсы</h2>
                            <a>Про Паллиатив</a>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className="RecommendationItem">xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="RecommendPaperClass">xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
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
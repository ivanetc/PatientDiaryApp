import React from 'react';
import '../index.scss'

import Data from "../DataClasses/Data.js";
import Header from "./HeaderComponent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RecommendationArticle from "./Recommentations/RecommendationArticle";


function RecommendationsComponent() {
    let user = Data.Data.getUserProfile(1);
    let careId = user.careId;

    let allRecommendations = Data.Data.getRecommendations(careId);
    let {recommendations, contacts, usefulLinks, articles} = getRecommendations(allRecommendations);

    let articleComponents = articles.map(
        article => <RecommendationArticle
                        header={article.name}
                        text={article.description}
                        sourceLink={article.link}
                        imageLink={article.imageLink}/>
    );

    let contactComponents = contacts.map(
        contact => <div>
            <h3>{contact.name}</h3>
            <span>{contact.phone}</span>
        </div>
    );



    recommendations.pop();
    contacts.pop();
    usefulLinks.pop();



    return (
        <div >
            <Header/>
            <div className="ComponentBody">
                <h1>{user.care}. Рекомендации.</h1>
                <Grid className="RecommendationContainer" container spacing={3}>
                    <Grid item xs={9}>
                        <Paper className="RecommendationItem">xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="RecommendationItem GreenContainer">
                            <h2>Полезные ресурсы</h2>
                            <a href="https://pro-palliativ.ru">Про Паллиатив</a>
                            <a href="https://www.youtube.com/channel/UCmMFZV1ZybknauJayLOWvQg">Мастерская заботы</a>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="RecommendPaperClass">xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="RecommendPaperClass">xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="RecommendationItem RedContainer">
                            <h2>Важные телефоны</h2>
                            {contactComponents}
                        </div>
                    </Grid>
                    {articleComponents}
                </Grid>
            </div>
        </div>
    );
}

function getRecommendations(allRecommendations) {
    let recommendations = [];
    let contacts = [];
    let usefulLinks = [];
    let articles = [];

    for (let recommendationId in allRecommendations) {
        let recommendation = allRecommendations[recommendationId];
        if (recommendation.type === "recommendation")
            recommendations.push(recommendation);
        if (recommendation.type === "article")
            articles.push(recommendation);
        if (recommendation.type === "contact")
            if (recommendation.phone !== "")
                contacts.push(recommendation);
            else
                usefulLinks.push(recommendation);
    }
    return {recommendations, contacts, usefulLinks, articles};
}

export default RecommendationsComponent;
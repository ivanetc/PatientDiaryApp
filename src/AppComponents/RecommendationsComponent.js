import React from 'react';
import '../index.scss'

import Data from "../DataClasses/Data.js";
import Header from "./HeaderComponent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RecommendationArticle from "./Recommentations/RecommendationArticle";


function RecommendationsComponent() {
    let user = Data.Data.getUserProfile(0);
    // let careId = user.careId;

    let allRecommendations = Data.Data.getRecommendations(0);
    let {recommendations, contacts, usefulLinks, articles} = getRecommendations(allRecommendations);

    const section = {
        minHeight: "95%"
    };

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

    let linksComponents = usefulLinks.map(
        link => <div>
            <a href={link.link}>{link.name}</a>
        </div>
    );

    let recommendationComponents = recommendations.map(
        recommendation =>
            <Grid style={section} item xs={3}>
                <div className="RecommendationItem GrayContainer">
                    <h3>{recommendation.name}</h3>
                    <p>{recommendation.description}</p>
                </div>
            </Grid>
    );

    return (
        <div >
            <Header/>
            <div className="ComponentBody">
                <h1>{user.care}. Рекомендации.</h1>
                <Grid
                    className="RecommendationContainer"
                    alignItems="stretch"
                    direction="row"
                    justify="center"
                    container
                    spacing={3}
                >
                    <Grid style={section} item xs={3}>
                        <div className="RecommendationItem GreenContainer">
                            <h2>Полезные ресурсы</h2>
                            {linksComponents}
                        </div>
                    </Grid>
                    {recommendationComponents}
                    <Grid style={section} item xs={3}>
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
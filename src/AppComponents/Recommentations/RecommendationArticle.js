import React from 'react';
import '../../index.scss'
import Grid from "@material-ui/core/Grid";


function RecommendationArticle({ header, text, imageLink, sourceLink }) {
    return (
        <Grid item xs={12}>

            <div className="RecommendationItem GrayContainer">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src={imageLink} alt="Изображение статьи"/>
                    </Grid>
                    <Grid item xs={6}>
                        <h2>{header}</h2>
                        <p>{text}</p>
                        <a href={sourceLink}>Читать в источнике</a>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default RecommendationArticle;
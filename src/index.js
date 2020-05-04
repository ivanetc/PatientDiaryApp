import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import * as ReactRouterDOM from "react-router-dom";
import ProfilPageComponent from "./AppComponents/ProfilPageComponent";
import NotFoundComponent from "./AppComponents/NotFoundComponent";
import FillingSurveyComponent from "./AppComponents/FillingSurveyComponent";
import Data from "./DataClasses/Data.js";
import RecommendationsComponent from "./AppComponents/RecommendationsComponent";
Data.Data.init();

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ProfilPageComponent} />
            <Route path="/fill_survey" component={FillingSurveyComponent} />
            <Route path="/recommendations" component={RecommendationsComponent} />
            <Route component={NotFoundComponent} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
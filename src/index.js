import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import * as ReactRouterDOM from "react-router-dom";
import ProfilPageComponent from "./AppComponents/ProfilPageComponent";
import NotFoundComponent from "./AppComponents/NotFoundComponent";
import FillingSurveyComponent from "./AppComponents/FillingSurveyComponent";
import Data from "./DataClasses/Data.js";
import RecommendationsComponent from "./AppComponents/RecommendationsComponent";
import CalendarComponent from "./AppComponents/СalendarComponent";
import DailyPlanComponent from "./AppComponents/DailyPlanComponent";
import Header from "./AppComponents/HeaderComponent";
Data.Data.init();

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;


ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={ProfilPageComponent} />
            <Route exact path="/daily_plan" component={DailyPlanComponent} />
            <Route path="/daily_plan/survey:id" component={FillingSurveyComponent} />
            <Route path="/recommendations" component={RecommendationsComponent} />
            <Route path="/calendar" component={CalendarComponent} />
            <Route component={NotFoundComponent} />
        </Switch>
    </Router>
    ,
    document.getElementById("root")
);
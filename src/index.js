import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Header from "./AppComponents/HeaderComponent";
import * as ReactRouterDOM from "react-router-dom";
import ProfilPageComponent from "./AppComponents/ProfilPageComponent";
import NotFoundComponent from "./AppComponents/NotFoundComponent";
import FillingSurveyComponent from "./AppComponents/FillingSurveyComponent";

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ProfilPageComponent} />
            <Route path="/fill_survey" component={FillingSurveyComponent} />
            <Route component={NotFoundComponent} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Amplify Settings
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';


import awsconfig from 'src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "src/ui-components";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import LandingPage from "views/LandingPage.js";
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider theme={studioTheme}>
        <BrowserRouter>
            <Switch>
            <Switch>
                <Route path="/index" render={(props) => <LandingPage {...props} />} />
                <Redirect to="/index" />
                <Redirect from="/" to="/index" />
            </Switch>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

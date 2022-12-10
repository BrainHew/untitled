import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Tests from "../pages/Tests";
import Main from "../pages/Main";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/tests">
                <Tests/>
            </Route>
            <Route path ="/main">
                <Main/>
            </Route>
            <Route path ="/error">
                <Error/>
            </Route>
            <Redirect to={'/error'}/>
        </Switch>
    );
};

export default AppRouter;
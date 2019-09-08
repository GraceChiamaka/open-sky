import React from 'react';
//import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../Components/common/index';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Dashboard/Dashboard';

export default () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </Router>
);
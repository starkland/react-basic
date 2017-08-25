import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/home';
import Users from '../../containers/users';
import Dashboard from '../../containers/dashboard';
import UserDetails from '../../components/user';

const Main = () => (
    <main>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={Users} />
            <Route path='/user/:number' component={UserDetails} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </main>
)

export default Main;
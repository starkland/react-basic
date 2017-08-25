import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../containers/home';
import Users from '../../containers/users';
import Dashboard from '../../containers/dashboard';
import UserDetails from '../../components/user';

const Main = (props) => {
    const usercomponent = props.guys 
                        ? <Users guys={props.guys} /> 
                        : <Users />;

    return(
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                 <Route path='/users' render={() => usercomponent}/> 
                 <Route path='/user/:number' component={UserDetails}/> 
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </main>
    )
}

export default Main;
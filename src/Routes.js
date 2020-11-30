import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ListUsers from './components/ListUsers';
import Common from './components/Common';
// import {
// 	USERS_KEY
// } from './actions/keys';

export const Routes = (props) => {
		return (
			<Switch>
				<Route exact path='/' component={Common} />
				<Route exact path='/users' component={ListUsers} />
			</Switch>
		);
	}

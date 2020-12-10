import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PostPage from './components/pages/PostPage';
import UsersPage from './components/pages/UsersPage';
import CommonPage from './components/pages/CommonPage';
import ListPostsPage from './components/pages/ListPostsPage';

export const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={CommonPage} />
			<Route exact path='/users' component={UsersPage} />
			<Route exact path='/users/:id/posts' component={ListPostsPage} />
			<Route exact path='/users/:id/post/:postId' component={PostPage} />	
		</Switch>
	);
}

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ListPosts from './components/ListPosts';
import Common from './components/Common';
import UsersPage from './components/UsersPage';
import PostPage from './components/PostPage';

export const Routes = (props) => {
	return (
		<Switch>
			<Route exact path='/' component={Common} />
			<Route exact path='/users' component={UsersPage} />
			<Route exact path='/users/:id/posts' component={ListPosts} />
			<Route exact path='/users/:id/post/:postId' component={PostPage} />	
		</Switch>
	);
}

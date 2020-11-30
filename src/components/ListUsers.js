import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
	addUsers
} from '../actions/actions.js'
import {
	USERS_KEY,
} from '../actions/keys';
import {
	getPathFromObject
} from '../helpers.js';

class ListUsers extends Component {
	
	componentDidMount() {
		this.props.getUsers();
	}
	render() {
		console.log(this.props.users);
		return (
			<div className="App">
			<header className="App-header">
			  <p>
				Edit
			  </p>
			</header>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.database);
	return {
		users : getPathFromObject(state.database, USERS_KEY, []),
	}
  }
   
  const mapDispatchToProps = (dispatch) => {
	return {
		getUsers() {
			return dispatch(addUsers());
		},
	}
  }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListUsers);

import '../styles/App.css';
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
import Menu from './Menu'
import UserCard from './UserCard'

class Common extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show_users: false
		}
		this.onClick = this.onClick.bind(this);
	  }
	
	  componentDidMount() {
		this.props.getUsers()
	  }
	  onClick() {
		this.setState({show_users: true})
	  }
	  renderUsers() {
		console.log(this.props.users);
		const users = [this.props.users];
		console.log(users.filter((i) => i.id === 12));
		  return users.length > 0 ? (users.map((i) => {
			  console.log(i);
					return (
						<UserCard key={i.id} params={i}/>
					);
			})) : null;
	  }
	  render() {
		return (
			<section className="container">
				<Menu onClick={this.onClick}/>
				{this.state.show_users && this.renderUsers()}
			</section>
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
)(Common);

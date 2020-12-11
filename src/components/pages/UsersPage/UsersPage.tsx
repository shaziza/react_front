import '../../../styles/App.scss'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Pagination from "react-js-pagination";
import {
	getUsers
} from '../../../actions/actions'
import {
	USERS_KEY,
	COUNT_PAGES_KEY
} from '../../../actions/keys';
import {
	getPathFromObject,
	BEMName
} from '../../../helpers';
import UserCard from '../../../components/cards/UserCard'

type TypeState = {
	active_page: number,
	selected: any
};
interface ParamsUsers {
	id: number,
	name: string
};
interface ParamsPagination {
	pages: number,
};
type TypeProps = {
	onSelect: () => void,
	handlePageChange: () => void,
	users: ParamsUsers[],
	pagination: ParamsPagination,
	getUsers: any,
	history: any,
	location: any,
};

const c = 'App';

class UsersPage extends Component<TypeProps, TypeState> {
	constructor(props: TypeProps) {
		super(props);
		this.state = {
			active_page: 1,
			selected: {},
		}
		this.handlePageChange = this.handlePageChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
	}
	componentDidMount() { 
		if (this.props.location.search.includes('page')) {
			const page = window.localStorage.getItem( 'PAGE');
			this.props.getUsers(page)
		} else {
			window.localStorage.removeItem( 'PAGE');
			this.props.getUsers()
		}
	}
	componentWillUnmount() {
		window.localStorage.removeItem( 'PAGE');
	}
	handlePageChange(pageNumber: any) {
		this.setState({active_page: pageNumber});
		this.props.getUsers(pageNumber);
		this.props.history.push({search: `?page=${pageNumber}`});
		window.localStorage.setItem( 'PAGE', pageNumber);
	}
	onSelect(item_id: number) {
		const selected = Object.assign({}, this.state.selected);
		if (!selected[item_id]) {
			const selected = {[item_id]: true};
			this.setState({
				selected, 
			});
		} else {
			this.setState({selected: {}});
		}
	}
	renderUsers() {
		const users = this.props.users;
		return (
		<Fragment>
			<div className={BEMName(c, 'item_list')}>  
				{users.map((i) => {
					return (
						<UserCard 	
							key={i.id} 
							params={i} 
							onSelect={() => this.onSelect(i.id)} 
							isSelected={this.state.selected[i.id]} />
					);
				})}
			</div>
			<div className={BEMName(c, 'pagination')}>
				{this.props.pagination.pages > 1 && (
					<Pagination
						hideDisabled
						activePage={this.state.active_page}
						itemsCountPerPage={12}
						totalItemsCount={this.props.pagination.pages}
						pageRangeDisplayed={10}
						itemClass={BEMName(c, 'page-item')}
						linkClass={BEMName(c, 'page-link')}
						getPageUrl={(i) => `/?page=${i}`}
						onChange={this.handlePageChange} />
				)}
			</div>
		</Fragment>
		);
	}
	render() {
		return (
			<div>
				{this.props.users.length > 0 && this.renderUsers()}
			</div>
		);
	  }
	}

	const mapStateToProps = (state: any) => {
		return {
			users : getPathFromObject(state.database, USERS_KEY, []),
			pagination: getPathFromObject(state.database, `${COUNT_PAGES_KEY}.users`, []),
		}
	}
	   
	const mapDispatchToProps = (dispatch: any) => {
		return {
			getUsers: (pageNumber: number) => dispatch(getUsers(pageNumber))
		}
	}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersPage);

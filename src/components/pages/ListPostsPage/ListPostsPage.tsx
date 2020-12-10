import '../../../styles/App.scss'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router'
import Pagination from "react-js-pagination"
import {
	getPosts
} from '../../../actions/actions'
import {
	POSTS_KEY,
	COUNT_PAGES_KEY
} from '../../../actions/keys';
import {
	getPathFromObject
} from '../../../helpers';
import PostCard from '../../../components/cards/PostCard'

type TypeState = {
	active_page: number,
	selected: any,
};
interface ParamsPosts {
	id: number,
	user_id: number,
	title: string
};
interface ParamsPagination {
	pages: number,
}
type MatchParams = {
	id: string,
}
interface TypeProps extends RouteComponentProps<MatchParams> {
	posts: ParamsPosts[],
	pagination: ParamsPagination,
	getPosts: any,
	getUsers: any,
}
class ListPostsPage extends Component<TypeProps, TypeState>{
	constructor(props: TypeProps) {
		super(props);
		this.state = {
			active_page: 1,
			selected: {},
		}
		this.handlePageChange = this.handlePageChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
	  }
	componentDidMount():void {
		const id = this.props.match.params.id;
		this.props.getPosts(id);
	}
	handlePageChange(pageNumber: number) {
		this.setState({active_page: pageNumber});
		this.props.getUsers(pageNumber);
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
	renderPosts() {
		const posts = this.props.posts;
		return posts.length > 0 ? (
		<Fragment>
			<div className='item_list'>  
				{posts.map((i) => {
					return (
						<PostCard 	
							key={i.id} 
							params={i} 
							onSelect={() => this.onSelect(i.id)} 
							isSelected={this.state.selected[i.id]} />
					);
				})}
			</div>
			<div className='pagination'>
				{this.props.pagination.pages > 1 && (
					<Pagination
						hideDisabled
						activePage={this.state.active_page}
						itemsCountPerPage={12}
						totalItemsCount={this.props.pagination && this.props.pagination.pages}
						pageRangeDisplayed={10}
						itemClass='page-item'
						linkClass='page-link'
						getPageUrl={(i) => `/?page=${i}`}
						onChange={this.handlePageChange} />
				)}
			</div>
	</Fragment>
	) : 'Ничего не найдено';
	}
	render() {
		return (
			<div>
				{this.renderPosts()}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		posts : getPathFromObject(state.database, POSTS_KEY, []),
		pagination: getPathFromObject(state.database, `${COUNT_PAGES_KEY}.posts`, []),
	}
  }
   
  const mapDispatchToProps = (dispatch: any) => {
	return {
		getPosts: (id: number) => dispatch(getPosts(id)),
	}
  }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListPostsPage);

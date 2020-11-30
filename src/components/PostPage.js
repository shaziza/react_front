import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
	getPost,
	getComments
} from '../actions/actions.js'
import {
	POST_KEY,
	COMMENTS_KEY
} from '../actions/keys';
import {
	getPathFromObject
} from '../helpers.js';
import Comments from './Comments.js';

class PostPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show_comments: false
		}
		this.onClick = this.onClick.bind(this);
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		const post_id = this.props.match.params.postId;
		this.props.getPost(id, post_id);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.location.search === "?comments=true") {
			setTimeout(() => {
				if (!this.state.show_comments) this.props.getComments(this.props.post.id);
				if (this.props.comments) this.setState({show_comments: true});
			}, 800)
		}
	}
	onClick() {
		this.props.getComments(this.props.post.id);
		if (this.props.comments) this.setState({show_comments: true});
		this.props.history.push({search: `?comments=true`});
	}
	render() {
		return (
			<div>
				{this.props.post ? (
					<div>
						<h1>
							{this.props.post.title}
						</h1>
						<p>
							{this.props.post.body}
						</p>
						<button onClick={this.onClick} className='button'>Показать комментарии</button>
					</div>
				) : 'Ничего не найдено'
				}
				{this.state.show_comments && <Comments items={this.props.comments}/>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post : getPathFromObject(state.database, POST_KEY, []),
		comments: getPathFromObject(state.database, COMMENTS_KEY, []),
	}
  }
   
  const mapDispatchToProps = (dispatch) => {
	return {
		getPost(id, post_id) {
			return dispatch(getPost(id, post_id));
		},
		getComments(id) {
			return dispatch(getComments(id));
		}
	}
  }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostPage);
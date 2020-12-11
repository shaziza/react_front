import '../../../styles/App.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router'
import {
	getPost,
	getComments
} from '../../../actions/actions'
import {
	POST_KEY,
	COMMENTS_KEY
} from '../../../actions/keys';
import {
	getPathFromObject,
	BEMName
} from '../../../helpers';
import Comments from '../../../components/blocks/Comments';

type TypeState = {
	show_comments: boolean,
};
interface ParamsPost {
	id: number,
	title: string,
	body: string
};
type MatchParams = {
	postId: string,
	id: string,
}
interface params {
	id: number,
	created_at: string,
	name: string,
	body: string
};
interface TypeProps extends RouteComponentProps<MatchParams> {
	post: ParamsPost,
	comments: params[],
	getPost: any,
	location: any,
	getComments: any,
	history: any,
	items: string[],
}
const c = 'App';

class PostPage extends Component<TypeProps, TypeState> {
	constructor(props: TypeProps) {
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
						<button onClick={this.onClick} className={BEMName(c, 'button')}>Показать комментарии</button>
					</div>
				) : 'Ничего не найдено'
				}
				{this.state.show_comments && <Comments items={this.props.comments}/>}
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		post : getPathFromObject(state.database, POST_KEY, []),
		comments: getPathFromObject(state.database, COMMENTS_KEY, []),
	}
  }
   
  const mapDispatchToProps = (dispatch: any) => {
	return {
		getPost: (id: number, post_id: number) => dispatch(getPost(id, post_id)),
		getComments: (id: number) => dispatch(getComments(id))
	}
  }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostPage);
import '../styles/App.css';
import React from 'react'

const Comments = ({items}) => {
	const nested_comment = items.filter((i) => i.id === 9);
	console.log(nested_comment);
	const style = {marginLeft: '8px'}
	return (
		<div className='comments-container'>
			{items.length > 0 ? items.map((i) => {
				const date = new Date(i.created_at).toLocaleString();
				return (
					<div key={i.id}>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<span className='name'>{i.name}</span>
							<span>{date}</span>
						</div>
						<p>
							{i.body}
						</p>
						{nested_comment.length > 0 && (
							<div className='comment-level'>
								<span style={style} className='name'>{nested_comment[0].name}</span>
								<p style={style}>{nested_comment[0].body}</p>
							</div>
						)}
						<span className='line'></span>
					</div>
				);
			}) : 'Нет комментариев'}
		</div>
	);
}
export default Comments

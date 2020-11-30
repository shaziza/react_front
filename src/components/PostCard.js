import '../styles/App.css';
import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({params, onSelect, isSelected}) => {
	return (
		<div key={params.id} className='item-card'>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input className={isSelected ? 'select_active' : 'select'}
					type="checkbox"
					checked={isSelected ? true : false}
					onClick={onSelect} />
				<span>{params.title}</span>
			</div>
			{isSelected && <Link to={`/users/${params.user_id}/post/${params.id}`} className='button'>Показать</Link>}	
		</div>
	)
}
export default PostCard

import '../styles/App.css';
import React from 'react'
import { Link } from 'react-router-dom';

interface params {
	id: number,
	user_id: number,
	title: string
}
type Props = {
	params: params,
	onSelect: () => void,
	isSelected: boolean
};

const PostCard = ({params, onSelect, isSelected}: Props) => {
	return (
		<div key={params.id} className='item-card'>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input className={isSelected ? 'select_active' : 'select'}
					type="checkbox"
					onChange={() => {}}
					checked={isSelected ? true : false}
					onClick={onSelect} />
				<span>{params.title}</span>
			</div>
			{isSelected && <Link to={`/users/${params.user_id}/post/${params.id}`} className='button'>Показать</Link>}	
		</div>
	)
}
export default PostCard

import './PostCard.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import {
	BEMName
} from '../../../helpers';

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

const c = 'PostCard';

const PostCard = ({params, onSelect, isSelected}: Props) => {
	return (
		<div key={params.id} className={BEMName(c, 'item-card')}>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input
					type="checkbox"
					onChange={() => {}}
					checked={isSelected ? true : false}
					onClick={onSelect} />
				<span>{params.title}</span>
			</div>
			{isSelected && <Link to={`/users/${params.user_id}/post/${params.id}`} className={BEMName(c, 'button')}>Показать</Link>}	
		</div>
	)
}
export default PostCard

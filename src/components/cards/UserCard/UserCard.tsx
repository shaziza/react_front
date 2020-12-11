import './UserCard.scss'
import React from 'react'
import {Link} from 'react-router-dom';
import {
	BEMName
} from '../../../helpers';

interface params {
	id: number,
	name: string
}
type Props = {
	params: params,
	onSelect: () => void,
	isSelected: boolean
};

const c = 'UserCard';

const UserCard = ({params, onSelect, isSelected}: Props) => {
	return (
		<div key={params.id} className={BEMName(c, 'item-card')}>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input 
					onChange={() => {}}
					type="checkbox"
					checked={isSelected ? true : false}
					onClick={onSelect}/>
				<span className='user_name'>{params.name}</span>
			</div>	
			{isSelected && <Link to={`/users/${params.id}/posts`} className={BEMName(c, 'button')}>Перейти к постам</Link>}
		</div>
	)
}
export default UserCard

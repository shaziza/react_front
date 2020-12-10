import '../../../styles/App.scss'
import React from 'react'
import {Link} from 'react-router-dom';

interface params {
	id: number,
	name: string
}
type Props = {
	params: params,
	onSelect: () => void,
	isSelected: boolean
};

const UserCard = ({params, onSelect, isSelected}: Props) => {
	return (
		<div key={params.id} className='item-card'>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input 
					className={isSelected ? 'select_active' : 'select'}
					onChange={() => {}}
					type="checkbox"
					checked={isSelected ? true : false}
					onClick={onSelect}/>
				<span className='user_name'>{params.name}</span>
			</div>	
			{isSelected && <Link to={`/users/${params.id}/posts`} className='button'>Перейти к постам</Link>}
		</div>
	)
}
export default UserCard

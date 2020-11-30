import '../styles/App.css';
import React from 'react'
import {Link} from 'react-router-dom';

const UserCard = ({params, onSelect, isSelected}) => {
	return (
		<div key={params.id} className='item-card'>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<input 
					className={isSelected ? 'select_active' : 'select'}
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

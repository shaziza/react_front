import '../styles/App.css';
import React from 'react'

const UserCard = ({params, onSelect, isSelected}) => {
    console.log(params);
	return (
		<div key={params.id} className='user-card'>
			<div style={{cursor: 'pointer'}} onClick={onSelect}>
				<span className={isSelected ? 'select_active' : 'select'}></span>
				<span className='user_name'>{params.name}</span>
			</div>	
		</div>
	)
}
export default UserCard

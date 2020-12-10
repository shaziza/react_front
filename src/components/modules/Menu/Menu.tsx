import '../styles/App.css';
import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
   <div className="menu-container">
      <NavLink activeClassName='menu-active' to={`/users`}>
        <i className= 'icon-users'/>Пользователи
      </NavLink>
   </div>
	);
};

export default Menu;

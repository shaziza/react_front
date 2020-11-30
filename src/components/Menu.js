import '../styles/App.css';
import React from 'react';
// import {NavLink} from 'react-router-dom'

/**
 * @param {Function} onClick
 */

const Menu = ({onClick}) => {
  return (
    <div className="left-column">
   <div className="menu-container">
   <div onClick={onClick}>
        <i className= 'icon-users'/>
            Пользователи
    </div>
   </div>
    </div>
	);
};

export default Menu;

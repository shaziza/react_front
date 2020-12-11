import './Menu.scss'
import React from 'react';
import {NavLink} from 'react-router-dom'
import {
	BEMName
} from '../../../helpers';

const c = 'Menu';

const Menu = () => {
  return (
   <div className={BEMName(c, 'container')}>
      <NavLink activeClassName={BEMName(c, 'item', ['active'])} to={`/users`}>
        <i className={BEMName(c, 'icon-users')}/>Пользователи
      </NavLink>
   </div>
	);
};

export default Menu;

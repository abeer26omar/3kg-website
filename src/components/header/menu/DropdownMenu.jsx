import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
        <li className={`menu-item-has-children two-columns current-menu-item`}>
          <NavLink 
            to={'/'} 
            className={'sf-with-ul'}>
            <span>{'Home'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/about-us'} 
            className={''}>
            <span>{'About us'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavHashLink smooth to={'/#brands'}>
            <span>{'Brands'}</span>
          </NavHashLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/projects'} 
            className={'two-columns'}>
            <span>{'Projects'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/case-studies'} 
            className={'two-columns'}>
            <span>{'Case Studies'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/contact'} 
            className={'two-columns'}>
            <span>{'Contact us'}</span>
          </NavLink>
        </li>
    </ul>
  );
};

export default DropdownMenu;

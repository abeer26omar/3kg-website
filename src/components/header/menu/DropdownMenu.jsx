import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
        <li className={`menu-item-has-children two-columns current-menu-item`}>
          <NavLink 
            to={'/'} 
            className={({ isActive }) =>
            isActive ? "sf-with-ul" : ""}
            end>
            <span>{'Home'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/about-us'} 
            className={({ isActive }) =>
            isActive ? "sf-with-ul" : ""}
            end>
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
            className={({ isActive }) =>
            isActive ? "sf-with-ul" : ""}
            end>
            <span>{'Projects'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/case-studies'} 
            className={({ isActive }) =>
            isActive ? "sf-with-ul" : ""}
            end>
            <span>{'Case Studies'}</span>
          </NavLink>
        </li>
        <li className={`menu-item-has-children`}>
          <NavLink 
            to={'/contact'} 
            className={({ isActive }) =>
            isActive ? "sf-with-ul" : ""}
            end>
            <span>{'Contact us'}</span>
          </NavLink>
        </li>
    </ul>
  );
};

export default DropdownMenu;

import React from "react";
import { NavLink } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    to: '/'
  },
  {
    name: "About us",
    activeClass: "",
    menuClass: "",
    to: '/about-us'
  },
  {
    name: "Brands",
    activeClass: "",
    menuClass: "",
    to: ''
  },
  {
    name: "Projects",
    activeClass: "",
    menuClass: "two-columns",
    to: ''
  },
  {
    name: "Case Studies",
    activeClass: "",
    menuClass: "two-columns",
    to: ''
  },
  {
    name: "Contact us",
    activeClass: "",
    menuClass: "two-columns",
    to: ''
  }
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <NavLink to={item.to} className={item.activeClass}>
            <span>{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;

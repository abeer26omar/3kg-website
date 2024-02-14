import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent =  [
  {
    name: "Home",
    to: '/'
  },
  {
    name: "About us",
    to: '/about-us'
  },
  {
    name: "Brands",
    to: ''
  },
  {
    name: "Projects",
    to: '/projects'
  },
  {
    name: "Case Studies",
    to: '/case-studies'
  },
  {
    name: "Contact us",
    to: '/contact'
  }
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                // <SubMenu title={item.name} key={i} />
                <MenuItem key={i}>
                  <Link to={item?.to}>{item.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      {/* <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Moonex</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
          </span>
          .
        </p>
        <Social />
      </div> */}
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;

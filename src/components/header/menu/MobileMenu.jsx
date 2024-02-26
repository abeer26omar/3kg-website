import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import { NavHashLink } from 'react-router-hash-link';

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
                <MenuItem>
                  <Link to={'/'}>{'Home'}</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={'/about-us'}>{'About us'}</Link>
                </MenuItem>
                <MenuItem>
                    <NavHashLink smooth to={'/#brands'}>
                        <span>{'Brands'}</span>
                    </NavHashLink>
                </MenuItem>
                <MenuItem>
                  <Link to={'/projects'}>{'Projects'}</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={'/case-studies'}>{'Case Studies'}</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={'/contact'}>{'Contact us'}</Link>
                </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default MobileMenu;

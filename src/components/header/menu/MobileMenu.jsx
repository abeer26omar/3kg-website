import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";
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

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavBarGroup,
  NavBarPlaceHolderStyledComponent,
  NavBarWrapper,
} from "./style";
import { useDeviceType } from "../../../hooks";

const navItems = [
  {
    label: "Trang Chủ",
    path: "/",
    icon: <i className="bi bi-house"></i>,
  },
  {
    label: "Cặp Đôi",
    path: "/couple",
    icon: <i className="bi bi-people-fill"></i>,
  },
  {
    label: "Album",
    path: "/album",
    icon: <i className="bi bi-journals"></i>,
  },
  {
    label: "Sự Kiện",
    path: "/event",
    icon: <i className="bi bi-calendar-event"></i>,
  },
  {
    label: "Thiệp Cưới",
    path: "/invitation",
    icon: <i className="bi bi-envelope"></i>,
  },
];

export const NavBarPlaceHolder = () => {
  return <NavBarPlaceHolderStyledComponent />;
};

function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route) => path === route;
  const { isMobile } = useDeviceType();

  return (
    <NavBarWrapper
      className={`navbar bg-body-tertiary fixed-${isMobile ? "bottom" : "top"}`}
    >
      <div className="container">
        {!isMobile && (
          <Link id="home" className="navbar-brand" to="/">
            Tiến <i className="bi bi-heart-fill" style={{ color: "red" }}></i>{" "}
            Loan
          </Link>
        )}

        <NavBarGroup className={`nav-group-${isMobile ? "mobile" : "desktop"}`}>
          <div className="navbar-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                className={`nav-link${isActive(item.path) ? " active" : ""}`}
                to={item.path}
              >
                <div className="text-center">
                  <div className="icon">{item.icon}</div>
                  <div className="label">{item.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </NavBarGroup>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;

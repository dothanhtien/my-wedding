import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarDeskTop, NavBarMobile } from "./style";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Cặp Đôi",
    path: "/couple",
  },
  {
    label: "Album",
    path: "/album",
  },
  {
    label: "Sự Kiện",
    path: "/event",
  },
  {
    label: "Thiệp Cưới",
    path: "/invitation",
  },
];

function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route) => path === route;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link id="home" className="navbar-brand" to="/">
          Tiến <i className="bi bi-heart-fill" style={{ color: "red" }}></i>{" "}
          Loan
        </Link>

        <NavBarMobile>
          <div className="btn-group dropstart">
            <button
              className="navbar-toggler"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="dropdown-menu">
              {navItems.map((item, key) => (
                <li key={key}>
                  <Link
                    className={`dropdown-item ${
                      isActive(item.path) ? "active" : ""
                    }`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </NavBarMobile>

        <NavBarDeskTop>
          <ul className="navbar-nav">
            {navItems.map((item, key) => (
              <li key={key} className="nav-item">
                <Link
                  className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </NavBarDeskTop>
      </div>
    </nav>
  );
}

export default NavBar;

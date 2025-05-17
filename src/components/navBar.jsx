import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link id="home" className="navbar-brand" to="/">
          Tiến <i className="bi bi-heart-fill" style={{ color: "red" }}></i>{" "}
          Loan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ justifyContent: "flex-end" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* need to activate the link if the current route matches */}
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/couple">
                Cặp Đôi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/album">
                Album Cưới
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event">
                Sự Kiện Cưới
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

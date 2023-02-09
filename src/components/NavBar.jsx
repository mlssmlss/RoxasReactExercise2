import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span>
            {props.totalCount > 0 && (
              <span className="badge bg-secondary ms-2">
                {props.totalCount}
              </span>
            )}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;

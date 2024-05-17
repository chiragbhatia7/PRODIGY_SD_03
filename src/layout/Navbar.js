import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CMS
          </Link>
          <Link className="btn btn-outline-light" to="/addContact">
            Add Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

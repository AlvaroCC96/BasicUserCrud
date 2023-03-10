import React from "react";
import { Link } from "react-router-dom";

const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Usuarios
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Lista De Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CreateUser">
                Crear Usuario
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;

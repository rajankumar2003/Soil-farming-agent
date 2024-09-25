import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <svg
            className="bi"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2 link-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Soils" className="nav-link px-3">
            Soil Details
          </Link>
        </li>
        <li>
          <Link to="/Distrebuter" className="nav-link px-3">
            Distributor Details
          </Link>
        </li>
        <li>
          <Link to="/Crops" className="nav-link px-3">
            Crops
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link px-3">
            About
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> */}
        <button type="button" className="btn btn-outline-primary me-4">
          Login
        </button>
        <button type="button" className="btn btn-primary me-2">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;

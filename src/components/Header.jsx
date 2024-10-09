import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleNavigationOfLogin = () => {
    window.location.href = "/Login";
  };
  const handleNavigationOfRegister = () => {
    window.location.href = "/Register";
  };

  const handelDropDown = () => {
    setMenu(prevMenu => !prevMenu);
    // if (menu === false) {
    //   menu = true;
    //   console.log("menue open ");
    // }
    // else if (menu === true) {
    //   menu = false;
    //   console.log("menue closed ");
    // }
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-color">
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
          <Link to="/" className="nav-link px-3 link-body-emphasis">
            Home
          </Link>
        </li>
        {/* link-secondary */}
        <li>
          <Link to="/Soils" className="nav-link px-3 link-body-emphasis">
            Soil Details
          </Link>
        </li>
        <li>
          <Link to="/Distrebuter" className="nav-link px-3 link-body-emphasis">
            Distributor Details
          </Link>
        </li>
        <li>
          <Link to="/Crops" className="nav-link px-3 link-body-emphasis">
            Crops
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link px-3 link-body-emphasis">
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
        <button
          type="button"
          className="btn  btn-secondary me-4"
          onClick={handleNavigationOfLogin}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-secondary me-4"
          onClick={handleNavigationOfRegister}
        >
          Register
        </button>
      </div>
      <div className="flex-shrink-0 dropdown ">
        <a
          href="#"
          className={`d-block link-body-emphasis text-decoration-none dropdown-toggle ${(menu === true) && "show"}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handelDropDown}
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
          />
        </a>
        <ul className={`dropdown-menu text-small shadow bg-color ${(menu === true) && "show"}`}  style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate3d(-114px, 35.4px, 0px)"}} data-popper-placement="bottom-start">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

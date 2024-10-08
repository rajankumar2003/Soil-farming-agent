import React from "react";

const Register = () => {
  return (
    <div className="d-flex align-items-center py-4">
      <main className="form-signin w-100 m-auto">
        <form>
          <img
            className="mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="User-Name"
              placeholder="Name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="user-number"
              placeholder="Phone Number"
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="radio-chek">
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="radio"
                value="Admin"
                id="admin-role"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Admin
              </label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Register;

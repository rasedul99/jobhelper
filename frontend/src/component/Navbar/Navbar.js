import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">JobHelper</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>InternShips</a>
          </li>
          <li tabIndex={0}>
            <a>
              Training
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Interview Preparation</a>
              </li>
              <li>
                <a>Web Development</a>
              </li>
              <li>
                <a>Machine Learning</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li tabIndex={0}>
            <a>
              Register
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>As an Student</a>
              </li>
              <li>
                <a>As an Employer</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

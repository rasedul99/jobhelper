import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log(user);
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          JobHelper
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="interships">InternShips</Link>
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
            <Link to="jobs">Jobs</Link>
          </li>

          {user ? (
            <li tabIndex={0}>
              <a>
                {user.displayName.split(" ")[0]}

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
                <div className="p-2 border-b-2">
                  <strong>{user.displayName}</strong>
                  <p>{user.email}</p>
                </div>
                <div className="p-2">
                  <Link to="/" className="hover:text-indigo-600">
                    My Application
                  </Link>
                </div>
                <div className="p-2">
                  <Link to="/signup" className="hover:text-indigo-600">
                    Edit Resume
                  </Link>
                </div>
                <div className="p-2">
                  <Link to="/signin" className="hover:text-indigo-600">
                    Logout
                  </Link>
                </div>
              </ul>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/signup">
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
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to="/signup">Job seeker</Link>
                  </li>
                  <li>
                    <Link to="/signup">As an Employer</Link>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

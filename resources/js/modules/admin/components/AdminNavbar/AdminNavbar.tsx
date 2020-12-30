import * as React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const AdminNavbar = (props: any) => {
  return (
    <Navbar title="Admin Panel">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  )
};

export default AdminNavbar;

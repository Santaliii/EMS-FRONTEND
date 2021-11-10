import React from "react";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return(
    <nav className='navbar'>
      <div className="brand-title">Employee Management System</div>
      <div className='navbar-links'>
        <ul>
          <li><Link style={{color: "white", textDecoration: "none"}} to="/">Home Page</Link></li>
          <li><Link style={{color: "white", textDecoration: "none"}} to="/add-employees">Add Employees</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
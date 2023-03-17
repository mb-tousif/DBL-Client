import React from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";

export default function SideNavbar() {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className={toggle ? "sidebar" : "sidebar open"}>
      <div className="logo-details">
        {
          !toggle ?<><i className="bx bxs-bank icon" onClick={()=>navigate("/")}></i>
          <div className="logo_name mx-auto">DBL</div><i className={toggle ? "bx bx-menu" : "bx bxs-x-square"} onClick={()=>handleToggle()}></i></>:<i className="bx bx-menu" onClick={()=>handleToggle()}></i>
        }
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </Link>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </Link>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </Link>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <Link to="/dashboard/moneyTransfer">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Transfer</span>
          </Link>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </Link>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </div>
  );
}

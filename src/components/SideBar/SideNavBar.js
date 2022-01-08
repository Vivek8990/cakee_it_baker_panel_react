import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SideNavBar() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <div className="logo_name">Cakee It</div>
        <i
          className={open ? "bx bx-menu-alt-right" : "bx bx-menu"}
          id="btn"
          onClick={() => setOpen(!open)}
        ></i>
      </div>
      <h6 style={{color: "white"}}>Cake Baker</h6>
      
      <ul className="nav-list-side-d">
        <li>
          <Link to="orders">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Orders</span>
            <span className="tooltip">Orders</span>
          </Link>
        </li>
        
          
        <li>
          <Link to="my_cakes">
            <i className="bx bx-cake"></i>
            <span className="links_name">My Cakes</span>
            <span className="tooltip">My Cakes</span>
          </Link>
        </li>
        <li>
          <Link to="upload">
            <i className="bx bx-upload"></i>
            <span className="links_name">Upload Cakes</span>
            <span className="tooltip">Upload Cakes</span>
          </Link>
        </li>
        

        <li className="profile">
          <div className="profile-details">
            <img src="" alt="profileImg" />
            <div className="name_job">
              <div className="name">Deep Hansda</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar;

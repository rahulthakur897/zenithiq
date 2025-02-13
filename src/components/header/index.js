import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./style.css";

export function Header() {
  const location = useLocation();
  const activeMenu = location?.pathname;
  const menuIconRef = useRef();

  const toggleMenu = () => {
    const activeState = menuIconRef.current.style.display;
    if (activeState !== "block") {
      menuIconRef.current.style.display = "block";
    } else {
      menuIconRef.current.style.display = "none";
    }
  };

  return (
    <header>
      <div className="main-continer">
        <div className="nav-logo">
          <Link to="/home">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/assets/image/logo.png"}
                alt="logo"
              />
            </figure>
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <IoMdMenu
            id="menu-icon"
            src={process.env.PUBLIC_URL + "assets/images/hamburger.png"}
            alt="hamburger"
            onClick={() => toggleMenu()}
          />
        </div>
        <div id="mobilemenu" ref={menuIconRef}>
          <ul>
            <li>
              <Link
                className={activeMenu === "/home" ? "active" : ""}
                to="/home"
              >
                Home
              </Link>
            </li>
            <li>
            <Link
                className={activeMenu === "/services" ? "active" : ""}
                to="/services"
              >
              Services</Link>
            </li>
            <li>
              <Link
                className={activeMenu === "/contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

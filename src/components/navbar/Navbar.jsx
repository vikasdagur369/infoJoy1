import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import Profile from "./profile/Profile";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    if (path) {
      navigate(path);
    }
  };

  const handleSignOut = () => {
    // Add sign-out logic here, like clearing tokens or calling a logout API
    console.log("User signed out");
    // Optionally navigate to a different route after sign-out
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", icon: "bx-grid-alt", path: "/" },
    { name: "Campaign Hub", icon: "bx-user", path: "/campaigns" },
    { name: "Account Hub", icon: "bx-message-square-detail", path: "/account" },
  ];

  return (
    <div className={`${styles.body} ${isSidebarOpen ? styles.body_pd : ""}`}>
      <header
        className={`${styles.header} ${isSidebarOpen ? styles.body_pd : ""}`}
      >
        <div className={styles.header_toggle} onClick={toggleSidebar}>
          <i className={`bx ${isSidebarOpen ? "bx-x" : "bx-menu"}`}></i>
        </div>
        <Profile />
      </header>
      <div className={`${styles.l_navbar} ${isSidebarOpen ? styles.show : ""}`}>
        <nav className={styles.nav}>
          <div>
            <Link to="/" className={styles.nav_logo}>
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className={styles.nav_logo_name}>infoJoy</span>
            </Link>
            <div className={styles.nav_list}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${styles.nav_link} ${
                    activeLink === item.name ? styles.active : ""
                  }`}
                  onClick={() => handleLinkClick(item.name, item.path)}
                >
                  <i className={`bx ${item.icon} ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>{item.name}</span>
                </Link>
              ))}
              <a
                href="#"
                className={styles.nav_link}
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default anchor behavior
                  handleSignOut();
                }}
              >
                <i className="bx bx-log-out nav_icon"></i>
                <span className={styles.nav_name}>SignOut</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

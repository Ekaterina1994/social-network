import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Profile</NavLink>
			</div>
      <div>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

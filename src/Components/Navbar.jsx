import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PuppyPage from "./PuppyPage";
import SearchPage from "./SearchPage";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div>
        <div className={styles.nav}>
          <div className={styles.nav1}>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/search">
              Search For Dogs
            </Link>
            <Link className="links" to="/puppy/e">
              Puppy
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;

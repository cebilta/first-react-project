import React from "react";
import styles from "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web developer</h1>
        <Typed
          className="typed-text"
          strings={["web design", "full stack developer", "machine learning engineer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;

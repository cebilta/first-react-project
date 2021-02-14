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
<<<<<<< HEAD
          strings={[
            "web design",
            "machine learning engineer",
            "full stack developer",
          ]}
=======
          strings={["web design", "full stack developer", "machine learning engineer"]}
>>>>>>> 13888ffe677a8e299b958f557413837b9054245f
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

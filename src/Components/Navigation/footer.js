import React from "react";
import logo from "../../media/image/logo/BubbleLogoKlein.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="navigation-list">
        <button className="navbar-button-left">
          <i className="material-icons icon-shadow-left ">play_arrow</i>
        </button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="navbar-button-center">
            <i className="material-icons logo-icon">bubble_chart</i>
          </button>
        </Link>
        <button className="navbar-button-left">
          <i className="material-icons icon-shadow-right">notifications</i>
        </button>
      </ul>
    </div>
  );
};

export default Footer;

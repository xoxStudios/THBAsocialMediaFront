import React from "react";
import logo from "../../media/image/logo/BubbleLogoGroß.svg";

const Navbar = () => {
  let showSettings = e => {
    e.preventDefault();
    return (
      <div style={{ position: "absolute", left: "0", top: "0" }}>"hallo"</div>
    );
  };

  return (
    <div className="navbar">
      <ul className="navigation-list">
        <button onClick={showSettings} className="navbar-button-left">
          <i className="material-icons icon-shadow-left">settings</i>
        </button>
        <li className="navigation-list-item-logo">
          <embed src={logo} className="navbar-logo" alt="Bubble Logo Navbar" />
        </li>
        <button className="navbar-button-right">
          <i className="material-icons icon-shadow-right">person</i>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../../media/image/logo/BubbleLogoKlein.svg";
import filter from "../../media/image/util/FilterTriangle.svg";
import notification from "../../media/image/util/NotificationBell.svg";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="navigation-list">
        <li className="navigation-list-item-icon">
          <embed
            src={filter}
            className="navbar-icon-footer"
            alt="Settingsicon"
          />
        </li>
        <li className="navigation-list-item-logo-small">
          <embed
            src={logo}
            className="navbar-logo-small"
            alt="Bubble Logo Navbar"
          />
        </li>
        <li className="navigation-list-item-icon">
          <embed
            src={notification}
            className="navbar-icon-footer"
            alt="Settingsicon"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <div className="leftmenu">
      <nav className="leftmenu-nav">
        <ul>
          <Link to="/">
            <li className="leftmenu-list">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968885.png"
                alt="medium-photo"
                width={20}
              />
            </li>
            <li className="leftmenu-list">
              <img
                src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                alt="home"
                width={20}
              />
            </li>
          </Link>
          <li className="leftmenu-list">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"
              alt="notifications"
              width={20}
            />
          </li>
          <li className="leftmenu-list">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"
              alt="lists"
              width={20}
            />
          </li>
          <li className="leftmenu-list">
            <img
              src="https://cdn-icons-png.flaticon.com/128/507/507205.png"
              alt="stories"
              width={20}
            />
          </li>
          <li className="leftmenu-list">
            <img
              src="https://cdn-icons-png.flaticon.com/128/684/684831.png"
              alt="write"
              width={20}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftMenu;

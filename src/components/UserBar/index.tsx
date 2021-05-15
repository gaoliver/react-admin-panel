import { useState } from "react";
import { HiOutlineMail, IoPersonCircleOutline } from "react-icons/all";

import "./index.scss";

interface Props {
  onClick: () => void;
}

function UserBar({ onClick }: Props) {
  // Unread messages
  var number = 3;

  // Dropdown menu
  const [active, setActive] = useState(false)
  const dropdownList = document.getElementById("dropdown-list")

  const toggleDropdown = () => {
    if (!active) {
      dropdownList?.classList.add("active-dropdown")
      setActive(true)
    } else {
      dropdownList?.classList.remove("active-dropdown")
      setActive(false)
    }
  }

  return (
    <div className="bar-container">
      {/* Responsive menu */}
      <input
        type="checkbox"
        id="menu"
        style={{ display: "none" }}
        onClick={onClick}
      />
      <label htmlFor="menu" className="menu_responsive">
        <span></span>
      </label>
      <div className="header-options">
        {/* Messages */}
        <div className="messages">
          {number !== 0 ? (
            <div className="unread">{number.toString()}</div>
          ) : null}
          <HiOutlineMail color="var(--gray-800)" size="1.5rem" />
        </div>
        <div className="user">
          {/* User's photo */}
          <IoPersonCircleOutline size="2rem" />
          {/* Person's name */}
          <div className="dropdown">
            <button className="header-name dropdown-toggle" type="button" onClick={toggleDropdown}>
              User Name
            </button>
            <ul id="dropdown-list" className="">
              <li id="logout">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBar;

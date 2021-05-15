import { useState } from "react";
import { HiOutlineMail, IoPersonCircleOutline } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

import "./index.scss";

interface Props {
  onClick: () => void;
}

interface RootState {
  userData: {
    name: string;
    surname: string;
  };
}

function UserBar({ onClick }: Props) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userData);

  // Unread messages
  var number = 3;

  // Dropdown menu
  const [active, setActive] = useState(false);
  const dropdownList = document.getElementById("dropdown-list");

  const toggleDropdown = () => {
    if (!active) {
      dropdownList?.classList.add("active-dropdown");
      setActive(true);
    } else {
      dropdownList?.classList.remove("active-dropdown");
      setActive(false);
    }
  };

  // Message for fake button
  const fakeButton = () => {
    alert(
      "This is only illustrative button. There's still not a functionallity for that. Front-end work, no database for this project yet."
    );
  };

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    dispatch(action.userLogout());
    return window.location.reload();
  };

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
        <div className="messages" onClick={fakeButton}>
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
            <button
              className="header-name dropdown-toggle"
              type="button"
              onClick={toggleDropdown}
            >
              {user?.name} {user?.surname}
            </button>
            <ul id="dropdown-list" className="">
              <li id="logout" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBar;

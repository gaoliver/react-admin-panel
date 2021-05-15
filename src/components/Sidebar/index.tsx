import { useEffect, useState } from "react";
import {
  CgScreen,
  IoPersonCircleOutline,
  FaHome,
  BiBookContent,
  FiUsers,
} from "react-icons/all";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";
import { User } from "../../constants/interfaces";

function Sidebar() {
  const user = useSelector((state: User) => state.userData);

  // To close the sidebar if at a smaller screen
  function closeSidebar() {
    if (window.screen.width < 800) {
      document.getElementById("menu")?.click();
    } else {
      setActivePage();
    }
  }

  useEffect(() => {
    setActivePage();
  });

  // Active page effect
  var location = useLocation().pathname.replace("/", "");
  const [prevPage, setPrevPage] = useState("");

  function setActivePage() {
    if (location === "") {
      document.getElementById(prevPage)?.classList.remove("active-page");
      document.getElementById("home")?.classList.add("active-page");
      setPrevPage("");
    } else if (prevPage !== "") {
      document.getElementById(prevPage)?.classList.remove("active-page");
      document.getElementById(location)?.classList.add("active-page");
      setPrevPage(location);
    } else {
      document.getElementById("home")?.classList.remove("active-page");
      document.getElementById(location)?.classList.add("active-page");
      setPrevPage(location);
    }
  }

  return (
    <div className="sidebar-container" id="sidebar">
      {/* App title */}
      <div className="row" id="sidebar-title">
        <CgScreen size="1.5rem" />
        <h4>Admin Panel</h4>
      </div>
      {/* User */}
      <div className="row" id="sidebar-user">
        <div className="user-photo">
          <IoPersonCircleOutline size="4rem" />
        </div>
        <div className="col-8">
          <p>Welcome,</p>
          <h5>
            {user?.name} {user?.surname}
          </h5>
        </div>
      </div>
      {/* Menu Options */}
      <div className="menu-options">
        <h5>General</h5>
        <ul onClick={() => closeSidebar()}>
          {/* Home */}
          <Link to="/" id="home">
            <FaHome />
            <p>Dashboard</p>
          </Link>
          {/* Teste */}
          <Link to="/course" id="course">
            <BiBookContent />
            <p>Course</p>
          </Link>
          {/* Users */}
          <Link to="/users" id="users">
            <FiUsers />
            <p>Users</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

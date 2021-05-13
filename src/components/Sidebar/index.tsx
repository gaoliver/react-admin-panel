import "./index.scss";

import {
  CgScreen,
  IoPersonCircleOutline,
  FaHome,
  BiBookContent,
} from "react-icons/all";
import { Link } from "react-router-dom";

interface Props {
    onClick: () => void
}

function Sidebar({ onClick } : Props) {
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
        <div className="col-9">
          <p>Welcome,</p>
          <h5>User Name</h5>
        </div>
      </div>
      {/* Menu Options */}
      <div className="menu-options">
        <h5>General</h5>
        <ul onClick={onClick}>
          {/* Home */}
          <Link to="/">
            <FaHome />
            <p>Home</p>
          </Link>
          {/* Teste */}
          <Link to="/course">
            <BiBookContent />
            <p>Course</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

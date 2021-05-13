import "./index.scss";

interface Props {
    onClick: () => void
}

function UserBar({ onClick } : Props) {
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
      <h1>User Bar</h1>
    </div>
  );
}

export default UserBar;

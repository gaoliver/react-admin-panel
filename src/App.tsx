import { BrowserRouter as Router } from "react-router-dom";

import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import UserBar from "./components/UserBar";
import Navigation from "./_navigation";

function App() {
  // Menu button toggle function
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar?.classList.contains("active")) {
      sidebar?.classList.remove("active");
    } else {
      sidebar?.classList.add("active");
    }
  }

  // To close the sidebar if at a smaller screen
  function closeSidebar() {
    if (window.screen.width < 800) {
      document.getElementById("menu")?.click();
    }
  }
  return (
    <div className="App">
      <Router>
        <Sidebar onClick={() => closeSidebar()} />
        <div className="col">
          <UserBar onClick={() => toggleSidebar()} />
          <div className="view-container">
            <Navigation />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

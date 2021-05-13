import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import UserBar from "./components/UserBar";
import { Dashboard, TestView } from "./views";

function App() {
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar?.classList.contains("active")) {
      sidebar?.classList.remove("active");
    } else {
      sidebar?.classList.add("active");
    }
  }
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="col">
          <UserBar onClick={() => toggleSidebar()} />
          <div className="view-container">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/test">
                <TestView />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

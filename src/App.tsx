import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import UserBar from "./components/UserBar";
import { Dashboard, TestView } from "./views";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-3 active" id="sidebar">
          <Sidebar />
        </div>
        <div className="col">
          <UserBar />
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

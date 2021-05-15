import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "./store/actions";

import "./styles/App.scss";
import Sidebar from "./components/Sidebar";
import UserBar from "./components/UserBar";
import Navigation from "./_navigation";
import Footer from "./components/Footer";
import Login from "./views/Login";

interface RootState {
  userId: number;
}

function App() {
  const dispatch = useDispatch();

  // Menu button toggle function
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar?.classList.contains("active")) {
      sidebar?.classList.remove("active");
    } else {
      sidebar?.classList.add("active");
    }
  }

  // is logged
  const [isLogged, setIsLogged] = useState(false);
  const userId = useSelector((state: RootState) => state.userId);

  function verifyUser() {
    if (userId > -1) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }

  useEffect(() => {
    let getId = localStorage.getItem("@admin/userId");
    if (getId) {
      dispatch(action.userLogin(parseInt(getId)));
      return verifyUser();
    } else {
      return;
    }
  });

  return (
    <div className="App">
      <Router>
        {isLogged ? (
          <>
            <Sidebar />
            <div className="col">
              <UserBar onClick={() => toggleSidebar()} />
              <div className="view-container">
                <Navigation />
                <Footer />
              </div>
            </div>
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login} />
            <Redirect exact to="/login" />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

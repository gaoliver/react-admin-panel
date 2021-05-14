import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./views/Dashboard"
import Course from "./views/Course";
import ChooseCorrectOption from "./views/Exercises/ChooseCorrectOption";
import NotFound from "./views/NotFound";
import Users from "./views/users";

export default function _navigation() {
  return (
    <Switch>
      {/* Home */}
      <Route exact path="/">
        <Dashboard />
      </Route>
      {/* Course page */}
      <Route exact path="/course">
        <Course />
      </Route>
      {/* Choose Correct Option: Add new */}
      <Route path="/course/choose-the-correct-option">
        <ChooseCorrectOption />
      </Route>
      {/* Users */}
      <Route exact path="/users">
        <Users />
      </Route>
      {/* 404 not found */}
      <Route exact path="/404" component={NotFound} />
      <Redirect exact to="/404" />
    </Switch>
  );
}

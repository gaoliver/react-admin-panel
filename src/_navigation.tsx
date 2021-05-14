import { Redirect, Route, Switch } from "react-router-dom";

import { Dashboard, Course, ChooseCorrectOption, NotFound } from "./views";

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
        {/* 404 not found */}
        <Route exact path="/404" component={NotFound} />
        <Redirect exact to="/404" />
      </Switch>
  );
}

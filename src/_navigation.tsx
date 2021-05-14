import { Route, Switch } from "react-router-dom";

import { Dashboard, Course, ChooseCorrectOption } from "./views";

export default function _navigation() {
  return (
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
        <Route exact path="/course/choose-the-correct-option">
          <ChooseCorrectOption />
        </Route>
      </Switch>
  );
}

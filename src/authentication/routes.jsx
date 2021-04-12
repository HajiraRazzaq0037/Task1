import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Task from "../pages/task";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Task} />
    </Switch>
  );
};

export default withRouter(Routes);

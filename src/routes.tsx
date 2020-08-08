import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeatcherList from "./pages/TeatcherList";
import TeatcherForm from "./pages/TeatcherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeatcherList} />
      <Route path="/give-classes" component={TeatcherForm} />
    </BrowserRouter>
  );
}

export default Routes;

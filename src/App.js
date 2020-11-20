import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import Welcome from "./views/welcome";
import Journey from "./views/journey";
import Match from "./views/match";
import "./style.scss";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/category-1" render={() => <h1>فئة ١</h1>} />
        <Route path="/category-2" render={() => <h1>فئة ٢</h1>} /> */}

        {/* restructure the app */}
        {/* <Route path={`/app/journey/:id`} component={JourneyRoad} /> */}
        <Route path={`/app/match`} component={Match} />
        <Route path={`/app/journey`} component={Journey} />
        <Route path="/app" component={Welcome} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import NewIdeas from "./views/newIdeas";
import Journey from "./views/journey";
import JourneyRoad from "./views/journeyRoad";
import Match from "./views/match";
import "./style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category-1" render={() => <h1>فئة ١</h1>} />
        <Route path="/category-2" render={() => <h1>فئة ٢</h1>} />
        <Route path={`/category-3/journey/:product`} component={JourneyRoad} />
        <Route path={`/category-3/journey`} component={Journey} />
        <Route path={`/category-3/match`} component={Match} />
        <Route path="/category-3" component={NewIdeas} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

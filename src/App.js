import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import NewIdeas from "./views/newIdeas";
import "./style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category-1" render={() => <h1>فئة ١</h1>} />
        <Route path="/category-2" render={() => <h1>فئة ٢</h1>} />
        <Route exact path="/category-3" component={NewIdeas} />
        <Route
          path={`/category-3/journey`}
          render={() => <h1>رحلة البحث عن فكرة</h1>}
        />
        <Route
          path={`/category-3/match`}
          render={() => <h1>الرابط العجيب</h1>}
        />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

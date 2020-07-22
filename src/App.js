import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Recipes } from "./Recipes";
import { Groceries } from "./Groceries";

import { SelectedRecipesProvider } from "./context";
import "./App.css";

const Base = () => {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path={`/:apiKey/groceries`} component={Groceries} />
        <Route path={`/:apiKey/recipes`} component={Recipes} />
      </Switch>
      <div className="footer-nav">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
          }}
          to={"recipes"}
        >
          Recetas
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
          }}
          to={"groceries"}
        >
          Lista
        </NavLink>
      </div>
    </div>
  );
};

function App() {
  return (
    <SelectedRecipesProvider>
      <Router>
        <Switch>
          <Route path="/:apiKey" component={Base} />
        </Switch>
      </Router>
    </SelectedRecipesProvider>
  );
}

export default App;

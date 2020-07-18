import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Recipes } from "./Recipes";
import { Groceries } from "./Groceries";

import { SelectedRecipesProvider } from "./context";
import "./App.css";

const Base = () => {
  return (
    <>
      <Switch>
        <Route path={`/:apiKey/groceries`} component={Groceries} />
        <Route path={`/:apiKey/recipes`} component={Recipes} />
      </Switch>
      <div>
        <Link to={"recipes"}>Recipes</Link>
        <Link to={"groceries"}>Groceries</Link>
      </div>
    </>
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

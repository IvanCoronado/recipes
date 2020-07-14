import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { Recipes } from "./Recipes";
import { Groceries } from "./Groceries";

import { SelectedRecipesProvider } from "./context";
import "./App.css";

const Base = () => {
  return (
    <>
      <Switch>
        <Route path={`/:apiKey/recipes`} component={Recipes} />
        <Route path={`/:apiKey/groceries`} component={Groceries} />
      </Switch>
      <div>
        <Link to={"recipes"}>Recipes</Link>
        <Link to={"gorceries"}>Groceries</Link>
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

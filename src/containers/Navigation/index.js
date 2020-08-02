import React from "react";
import { Route, Switch } from "react-router-dom";

import { AppContainer } from "components/Layout";
import { BottomNav } from "components/BottomNav";
import { Groceries } from "containers/Groceries";
import { MealPlan } from "containers/MealPlan";

const Base = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path={`/:apiKey/groceries`} component={Groceries} />
        <Route path={`/:apiKey/meal-plan`} component={MealPlan} />
      </Switch>
      <BottomNav />
    </AppContainer>
  );
};

const Navigation = () => {
  return (
    <Switch>
      <Route path="/:apiKey" component={Base} />
    </Switch>
  );
};

export default Navigation;

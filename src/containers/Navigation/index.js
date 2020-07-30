import React from "react";
import { Route, Switch } from "react-router-dom";

import { BottomNav } from "components/BottomNav";
import { Groceries } from "containers/Groceries";
import { MealPlan } from "containers/MealPlan";

import { Container } from "./styles";

const Base = () => {
  return (
    <Container>
      <Switch>
        <Route path={`/:apiKey/groceries`} component={Groceries} />
        <Route path={`/:apiKey/meal-plan`} component={MealPlan} />
      </Switch>
      <BottomNav />
    </Container>
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

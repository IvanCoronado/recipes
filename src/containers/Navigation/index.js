import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AppContainer } from "components/Layout";
import { Groceries } from "containers/Groceries";
import { MealPlan } from "containers/MealPlan";
import { Configuration } from "containers/Configuration";

const Navigation = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path="/lista-de-la-compra" component={Groceries} />
        <Route path="/plan-de-comida" component={MealPlan} />
        <Route path="/configuracion" component={Configuration} />
        <Redirect to="/configuracion" />
      </Switch>
    </AppContainer>
  );
};

export default Navigation;

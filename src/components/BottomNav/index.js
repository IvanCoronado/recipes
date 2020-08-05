import React from "react";
import { Tabs, Tab } from "./styles";

export const BottomNav = () => {
  return (
    <Tabs>
      <Tab to={`/plan-de-comida`}>Plan</Tab>
      <Tab to={`/lista-de-la-compra`}>Compra</Tab>
      <Tab to={`/configuracion`}>Perfil</Tab>
    </Tabs>
  );
};

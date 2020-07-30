import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "./styles";

export const BottomNav = () => {
  const { apiKey } = useParams();

  return (
    <Tabs>
      <Tab to={`/${apiKey}/meal-plan`}>Recetas</Tab>
      <Tab to={`/${apiKey}/groceries`}>Lista</Tab>
    </Tabs>
  );
};

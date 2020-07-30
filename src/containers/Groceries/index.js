import React from "react";

import { useIngredient } from "api/useIngredient";
import { Loading } from "components/Loading";

import { useConnect } from "./connect";
import { Container, Title, Column } from "./styles";

const Ingredient = ({ id, value, onChangeIngredient }) => {
  const { data, status } = useIngredient(id);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <label className="recipe-row" style={{ display: "block" }}>
      <input
        type="checkbox"
        checked={value}
        onChange={() => onChangeIngredient(id)}
      />
      {data.fields.name}
    </label>
  );
};

export const Groceries = () => {
  const { ingredients, checkedIngredients, onChangeIngredient } = useConnect();
  return (
    <Container>
      <Title>Lista de la compra</Title>
      <Column>
        {ingredients.map((id) => (
          <Ingredient
            key={id}
            id={id}
            value={checkedIngredients.includes(id)}
            onChangeIngredient={onChangeIngredient}
          />
        ))}
      </Column>
    </Container>
  );
};

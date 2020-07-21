import React from "react";
import { useConnect } from "./connect";
import { useIngredient } from "../useIngredient";

const Ingredient = ({ id, value, onChangeIngredient }) => {
  const { data, status } = useIngredient(id);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <label style={{ display: "block" }}>
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
    <div>
      <h1>Lista de la compra</h1>
      <div>
        {ingredients.map((id) => (
          <Ingredient
            key={id}
            id={id}
            value={checkedIngredients.includes(id)}
            onChangeIngredient={onChangeIngredient}
          />
        ))}
      </div>
    </div>
  );
};

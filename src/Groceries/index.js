import React from "react";
import { useConnect } from "./connect";
import { useIngredient } from "../useIngredient";

const Ingredient = ({ id, value, onChangeIngredient }) => {
  const { data, status } = useIngredient(id);

  if (status === "loading") {
    return <div className="recipe-row">Cargando ingrediente...</div>;
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
    <div className="recipe-container">
      <h1>Lista de la compra</h1>
      <div className="recipes">
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

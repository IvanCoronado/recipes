import React from "react";
import { useSelectedRecipes } from "./context";
import { useIngredient } from "./useIngredient";

const Ingredient = ({ id }) => {
  const { data, status } = useIngredient(id);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{data.fields.name}</div>;
};

export const Groceries = () => {
  const { ingredients } = useSelectedRecipes();
  console.log(ingredients);
  return (
    <div>
      <h1>Groceries</h1>
      <div>
        {ingredients.map((id) => (
          <Ingredient key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

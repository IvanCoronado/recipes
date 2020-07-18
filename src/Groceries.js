import React, { useMemo } from "react";
import { useIngredient } from "./useIngredient";
import { useParams } from "react-router-dom";

const Ingredient = ({ id }) => {
  const { data, status } = useIngredient(id);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <div>{data.fields.name}</div>;
};

export const Groceries = () => {
  const { apiKey } = useParams();
  const ingredients = useMemo(() => {
    const selectedRecipes = localStorage.getItem(apiKey)
      ? JSON.parse(localStorage.getItem(apiKey))
      : [];

    return selectedRecipes.flatMap(({ fields }) =>
      fields.ingredients.map((id) => id)
    );
  }, [apiKey]);

  return (
    <div>
      <h1>Lista de la compra</h1>
      <div>
        {ingredients.map((id) => (
          <Ingredient key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

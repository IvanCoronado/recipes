import React, { useState, useCallback } from "react";
import { useRecipes } from "./useRecipes";
import { useSelectedRecipes } from "./context";

export const Recipes = () => {
  const { data, status } = useRecipes();
  const [recipes, setRecipes] = useState([]);
  const [active, setActive] = useState(false);
  const { setIngredients } = useSelectedRecipes();

  const onStart = useCallback(() => {
    setActive(true);
    const ingredients = recipes.flatMap(({ fields }) =>
      fields.ingredients.map((id) => id)
    );
    setIngredients(ingredients);
  }, [setActive, recipes, setIngredients]);

  const onCancel = useCallback(() => {
    setActive(false);
    setIngredients([]);
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const { records } = data;

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {active &&
          recipes.map((recipe) => (
            <div key={recipe.id}>{recipe.fields.name}</div>
          ))}
        {!active &&
          records.map((recipe) => (
            <div key={recipe.id}>
              {recipe.fields.name}{" "}
              {recipes.find((r) => r === recipe) ? (
                <button
                  onClick={() =>
                    setRecipes(recipes.filter((r) => r !== recipe))
                  }
                >
                  -
                </button>
              ) : (
                <button onClick={() => setRecipes(recipes.concat(recipe))}>
                  +
                </button>
              )}
            </div>
          ))}
      </div>
      {active ? (
        <button onClick={onCancel}>Cancel</button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}
    </div>
  );
};

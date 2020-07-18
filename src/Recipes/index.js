import React from "react";
import { useConnect } from "./connect";

export const Recipes = () => {
  const { data, planActive, selectedRecipes, isLoading, handle } = useConnect();

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Ups... error</div>;
  }

  const { records: recipesList } = data;

  return (
    <div>
      <h1>Recetas</h1>
      <div>
        {planActive ? (
          <>
            {selectedRecipes.map((recipe) => (
              <div key={recipe.id}>{recipe.fields.name}</div>
            ))}
            <button onClick={handle.cancelPlan}>Nuevo plan</button>
          </>
        ) : (
          <>
            {recipesList.map((recipe) => (
              <div key={recipe.id}>
                {recipe.fields.name}
                {selectedRecipes.find((r) => r.id === recipe.id) ? (
                  <button onClick={() => handle.removeRecipeFromPlan(recipe)}>
                    -
                  </button>
                ) : (
                  <button onClick={() => handle.addRecipeToPlan(recipe)}>
                    +
                  </button>
                )}
              </div>
            ))}
            <button onClick={handle.startPlan}>Empezar plan</button>
          </>
        )}
      </div>
    </div>
  );
};

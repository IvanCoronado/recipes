import React from "react";

import { Loading } from "components/Loading";

import { useConnect } from "./connect";
import "./styles.css";

export const Recipes = () => {
  const { data, planActive, selectedRecipes, isLoading, handle } = useConnect();

  if (!data && isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  const { records: recipesList } = data;

  return (
    <div className="recipe-container">
      <h1>Recetas</h1>
      <div className="recipes">
        {planActive ? (
          <>
            {selectedRecipes.map((recipe) => (
              <div className="recipe-row" key={recipe.id}>
                {recipe.fields.name}
              </div>
            ))}
            <button className="action-button red" onClick={handle.cancelPlan}>
              Nuevo plan
            </button>
          </>
        ) : (
          <>
            {recipesList.map((recipe) => (
              <div className="recipe-row" key={recipe.id}>
                {recipe.fields.name}
                {selectedRecipes.find((r) => r.id === recipe.id) ? (
                  <button
                    className="recipe-row-action red"
                    onClick={() => handle.removeRecipeFromPlan(recipe)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="recipe-row-action"
                    onClick={() => handle.addRecipeToPlan(recipe)}
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <button className="action-button" onClick={handle.startPlan}>
              Empezar plan
            </button>
          </>
        )}
      </div>
    </div>
  );
};

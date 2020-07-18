import { useState, useCallback } from "react";
import { useRecipes } from "../useRecipes";
import { useParams } from "react-router-dom";

export const useConnect = () => {
  const { apiKey } = useParams();
  const { data, isLoading } = useRecipes();
  const [selectedRecipes, setSelectedRecipes] = useState(
    localStorage.getItem(apiKey) ? JSON.parse(localStorage.getItem(apiKey)) : []
  );
  const [planActive, setActivePlan] = useState(!!localStorage.getItem(apiKey));

  const startPlan = useCallback(() => {
    setActivePlan(true);
    localStorage.setItem(apiKey, JSON.stringify(selectedRecipes));
  }, [selectedRecipes, apiKey]);

  const cancelPlan = useCallback(() => {
    setActivePlan(false);
    setSelectedRecipes([]);
    localStorage.removeItem(apiKey);
  }, [apiKey]);

  const addRecipeToPlan = useCallback(
    (recipe) => setSelectedRecipes(selectedRecipes.concat(recipe)),
    [selectedRecipes]
  );

  const removeRecipeFromPlan = useCallback(
    (recipe) => setSelectedRecipes(selectedRecipes.filter((r) => r !== recipe)),
    [selectedRecipes]
  );

  const recipeIsSelected = useCallback(
    (recipe) => selectedRecipes.find((r) => r.id === recipe.id),
    [selectedRecipes]
  );

  return {
    data,
    isLoading,
    selectedRecipes,
    planActive,
    handle: {
      cancelPlan,
      startPlan,
      addRecipeToPlan,
      removeRecipeFromPlan,
      recipeIsSelected,
    },
  };
};

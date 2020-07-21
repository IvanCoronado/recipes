import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useConnect = () => {
  const { apiKey } = useParams();
  const ingredients = useMemo(() => {
    const selectedRecipes = localStorage.getItem(apiKey)
      ? JSON.parse(localStorage.getItem(apiKey))
      : [];

    return selectedRecipes.flatMap(({ fields }) =>
      fields.ingredients.map((id) => id)
    );
  }, [apiKey]);
  const [checkedIngredients, setCheckedIngredients] = useState(
    localStorage.getItem(`${apiKey}-checked`)
      ? JSON.parse(localStorage.getItem(`${apiKey}-checked`))
      : []
  );

  useEffect(() => {
    localStorage.setItem(
      `${apiKey}-checked`,
      JSON.stringify(checkedIngredients)
    );
  }, [checkedIngredients, apiKey]);

  const onChangeIngredient = (ingredientId) => {
    if (checkedIngredients.includes(ingredientId)) {
      setCheckedIngredients(
        checkedIngredients.filter((idToCheck) => idToCheck !== ingredientId)
      );
    } else {
      setCheckedIngredients([...checkedIngredients, ingredientId]);
    }
  };

  return {
    ingredients,
    checkedIngredients,
    onChangeIngredient,
  };
};

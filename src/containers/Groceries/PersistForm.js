import React, { useEffect, useState, useMemo } from "react";
import { useFormikContext } from "formik";
import uniqBy from "lodash/uniqBy";
import groupBy from "lodash/groupBy";

import { useIngredient } from "api/useIngredient";
import { recoverMealPlan, saveGroceries, recoverGroceries } from "localStorage";

const FetchIngredient = ({ id, ingredients, setIngredients }) => {
  const { data } = useIngredient(id);
  useEffect(() => {
    if (!!data) {
      if (!ingredients.find((ingredient) => ingredient.id === data.id)) {
        setIngredients([
          ...ingredients,
          {
            id: data.id,
            category: data.fields.category,
            name: data.fields.name,
          },
        ]);
      }
    }
  }, [data, ingredients, setIngredients]);

  return null;
};

const emptyMealPlan = { isActive: false, mealPlan: [] };

export const PersistForm = () => {
  const { values, setValues } = useFormikContext();
  const [ingredients, setIngredients] = useState([]);

  const { mealPlanIsActive, ingredientsInMealPlan } = useMemo(() => {
    const selectedRecipes = recoverMealPlan() || emptyMealPlan;
    const allIngredients = selectedRecipes.mealPlan.flatMap(({ recipes }) =>
      recipes.flatMap(({ fields }) => fields.ingredients.map((id) => id))
    );

    return {
      mealPlanIsActive: selectedRecipes.isActive,
      ingredientsInMealPlan: uniqBy(allIngredients),
    };
  }, []);

  const groceriesAlreadyCached = useMemo(() => {
    const groceriesCached = recoverGroceries();

    if (groceriesCached) {
      setValues(groceriesCached);
      return true;
    } else {
      return false;
    }
  }, [setValues]);

  useEffect(() => {
    if (ingredientsInMealPlan.length === ingredients.length) {
      const categorizedIngredients = Object.values(
        groupBy(ingredients, "category")
      );
      setValues({
        categorizedIngredients,
      });
    }
  }, [ingredientsInMealPlan, ingredients, setValues]);

  useEffect(() => {
    if (!!values) {
      saveGroceries(values);
    }
  }, [values]);

  return (
    <>
      {!groceriesAlreadyCached &&
        mealPlanIsActive &&
        ingredientsInMealPlan.map((ingredientId) => (
          <FetchIngredient
            key={ingredientId}
            id={ingredientId}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        ))}
    </>
  );
};

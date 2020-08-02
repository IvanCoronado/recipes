import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useFormikContext } from "formik";
import uniqBy from "lodash/uniqBy";
import groupBy from "lodash/groupBy";

import { useIngredient } from "api/useIngredient";
import { MEAL_PLAN_FORM_NAME } from "containers/MealPlan/PersistForm";

export const GROCERIES_FORM_NAME = "-groceries";

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

export const PersistForm = () => {
  const { apiKey } = useParams();
  const { values, setValues } = useFormikContext();
  const [ingredients, setIngredients] = useState([]);

  const { mealPlanIsActive, ingredientsInMealPlan } = useMemo(() => {
    const key = apiKey + MEAL_PLAN_FORM_NAME;
    const selectedRecipes = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : { isActive: false, mealPlan: [] };
    const allIngredients = selectedRecipes.mealPlan.flatMap(({ recipes }) =>
      recipes.flatMap(({ fields }) => fields.ingredients.map((id) => id))
    );

    return {
      mealPlanIsActive: selectedRecipes.isActive,
      ingredientsInMealPlan: uniqBy(allIngredients),
    };
  }, [apiKey]);

  const groceriesAlreadyCached = useMemo(() => {
    const key = apiKey + GROCERIES_FORM_NAME;
    const groceriesCached = JSON.parse(localStorage.getItem(key));

    if (groceriesCached) {
      setValues(groceriesCached);
      return true;
    } else {
      return false;
    }
  }, [apiKey, setValues]);

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
      const key = apiKey + GROCERIES_FORM_NAME;
      window.localStorage.setItem(key, JSON.stringify(values));
    }
  }, [values, apiKey]);

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

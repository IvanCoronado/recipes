import { useEffect } from "react";
import { useFormikContext } from "formik";

import { GROCERIES_FORM_NAME } from "containers/Groceries/PersistForm";

export const MEAL_PLAN_FORM_NAME = "meal-plan";

const initialValues = {
  isActive: false,
  mealPlan: [
    {
      id: 0,
      recipes: [],
    },
  ],
};

export const PersistForm = () => {
  const { values, setValues } = useFormikContext();

  useEffect(() => {
    const storedState = window.localStorage.getItem(MEAL_PLAN_FORM_NAME);
    if (!!storedState) {
      setValues(JSON.parse(storedState));
    } else {
      setValues(initialValues);
    }
  }, [setValues]);

  useEffect(() => {
    if (values && !values.isActive) {
      window.localStorage.removeItem(GROCERIES_FORM_NAME);
    }
    window.localStorage.setItem(MEAL_PLAN_FORM_NAME, JSON.stringify(values));
  }, [values]);

  return null;
};

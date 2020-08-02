import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormikContext } from "formik";

import { GROCERIES_FORM_NAME } from "containers/Groceries/PersistForm";

export const MEAL_PLAN_FORM_NAME = "-meal-plan";

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
  const { apiKey } = useParams();
  const { values, setValues } = useFormikContext();
  const name = apiKey + MEAL_PLAN_FORM_NAME;

  useEffect(() => {
    const storedState = window.localStorage.getItem(name);
    if (!!storedState) {
      setValues(JSON.parse(storedState));
    } else {
      setValues(initialValues);
    }
  }, [setValues, name]);

  useEffect(() => {
    if (values && !values.isActive) {
      const groceriesKey = apiKey + GROCERIES_FORM_NAME;
      window.localStorage.removeItem(groceriesKey);
    }
    window.localStorage.setItem(name, JSON.stringify(values));
  }, [apiKey, values, name]);

  return null;
};

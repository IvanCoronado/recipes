import { useEffect } from "react";
import { useFormikContext } from "formik";

import { saveMealPlan, recoverMealPlan, clearGroceries } from "localStorage";

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
    const mealPlan = recoverMealPlan();

    setValues(mealPlan || initialValues);
  }, [setValues]);

  useEffect(() => {
    if (values && !values.isActive) {
      clearGroceries();
    }
    saveMealPlan(values);
  }, [values]);

  return null;
};

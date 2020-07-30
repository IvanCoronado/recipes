import { useMemo, useCallback } from "react";

export const useConnect = () => {
  const initialValues = useMemo(
    () => ({
      isActive: false,
      mealPlan: [
        {
          id: 0,
          name: "Lunes",
          recipes: [],
        },
        {
          id: 1,
          name: "Martes",
          recipes: [],
        },
      ],
    }),
    []
  );

  const handleSubmit = useCallback(
    async (values, { setErrors, setSubmitting }) => {
      console.log(values);
    },
    []
  );
  return {
    form: {
      initialValues,
      handleSubmit,
    },
  };
};

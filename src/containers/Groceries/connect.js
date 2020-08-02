import { useIngredientCategories } from "api/useIngredientCategories";

export const useConnect = () => {
  const { data, isLoading } = useIngredientCategories();
  console.log(data);
  return {
    data,
    isLoading,
  };
};

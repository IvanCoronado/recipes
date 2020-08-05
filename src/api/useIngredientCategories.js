import { useQuery } from "react-query";
import { api } from "api/client";

const getIngredientCategories = async (_) => api(`ingredientCategories`);

export const useIngredientCategories = () => {
  return useQuery(["ingredientCategory"], getIngredientCategories);
};

import { useQuery } from "react-query";
import { api } from "api/client";
import { getAppId } from "localStorage";

const getIngredientCategories = async (_) => api(`ingredientCategories`);

export const useIngredientCategories = () => {
  return useQuery(["ingredientCategory", getAppId()], getIngredientCategories);
};

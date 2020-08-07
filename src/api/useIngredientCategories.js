import { useQuery } from "react-query";
import { api } from "api/client";
import { recoverCredentials } from "localStorage";

const getIngredientCategories = async (_) => api(`ingredientCategories`);

export const useIngredientCategories = () => {
  const { appId } = recoverCredentials();

  return useQuery(["ingredientCategory", appId], getIngredientCategories);
};

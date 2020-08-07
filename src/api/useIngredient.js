import { useQuery } from "react-query";
import { api } from "api/client";
import { recoverCredentials } from "localStorage";

const getIngredientById = async (_, ingredientId) =>
  api(`ingredients/${ingredientId}`);

export const useIngredient = (ingredientId) => {
  const { appId } = recoverCredentials();
  return useQuery(["ingredient", ingredientId, appId], getIngredientById);
};

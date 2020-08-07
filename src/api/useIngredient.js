import { useQuery } from "react-query";
import { api } from "api/client";
import { getAppId } from "localStorage";

const getIngredientById = async (_, ingredientId) =>
  api(`ingredients/${ingredientId}`);

export const useIngredient = (ingredientId) => {
  return useQuery(["ingredient", ingredientId, getAppId()], getIngredientById);
};

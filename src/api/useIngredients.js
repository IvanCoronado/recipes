import { useQuery } from "react-query";
import { api } from "api/client";
import { getAppId } from "localStorage";

const getIngredients = async (_) => api(`ingredients`);

export const useIngredients = () => {
  return useQuery(["ingredients", getAppId()], getIngredients);
};

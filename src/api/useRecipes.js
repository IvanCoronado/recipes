import { useQuery } from "react-query";
import { api } from "api/client";
import { getAppId } from "localStorage";

const getRecipes = async (_) => api(`recipes`);

export const useRecipes = () => {
  return useQuery(["recipes", getAppId()], getRecipes);
};

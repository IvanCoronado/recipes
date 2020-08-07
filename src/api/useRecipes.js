import { useQuery } from "react-query";
import { api } from "api/client";
import { recoverCredentials } from "localStorage";

const getRecipes = async (_) => api(`recipes`);

export const useRecipes = () => {
  const { appId } = recoverCredentials();

  return useQuery(["recipes", appId], getRecipes);
};

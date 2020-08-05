import { useQuery } from "react-query";
import { api } from "api/client";

const getRecipes = async (_) => api(`recipes`);

export const useRecipes = () => {
  return useQuery(["recipes"], getRecipes);
};

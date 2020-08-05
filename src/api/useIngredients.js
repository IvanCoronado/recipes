import { useQuery } from "react-query";
import { api } from "api/client";

const getIngredients = async (_) => api(`ingredients`);

export const useIngredients = () => {
  return useQuery(["ingredients"], getIngredients);
};

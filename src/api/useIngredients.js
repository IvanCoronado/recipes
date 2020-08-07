import { useQuery } from "react-query";
import { api } from "api/client";

import { recoverCredentials } from "localStorage";

const getIngredients = async (_) => api(`ingredients`);

export const useIngredients = () => {
  const { appId } = recoverCredentials();

  return useQuery(["ingredients", appId], getIngredients);
};

import { useRecipes } from "api/useRecipes";

export const useConnect = () => {
  const { data, isLoading } = useRecipes();

  return {
    data,
    isLoading,
  };
};

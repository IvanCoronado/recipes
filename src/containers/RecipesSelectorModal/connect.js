import { useMemo } from "react";
import { useRecipes } from "api/useRecipes";
import groupBy from "lodash/groupBy";

export const useConnect = () => {
  const { data, isLoading } = useRecipes();
  const categories = useMemo(() => {
    let categories = [];

    if (data) {
      categories = Object.values(
        groupBy(data.records, "fields.category")
      ).reverse();
    }

    return categories;
  }, [data]);

  return {
    data,
    categories,
    isLoading,
  };
};

import { useQuery } from "react-query";

const getIngredientById = async (_, ingredientId) => {
  return fetch(
    `https://api.airtable.com/v0/appojBodpMEKCgFIP/ingredients/${ingredientId}?api_key=key8nWOFvWRmEdhmv`
  ).then((res) => res.json());
};

export const useIngredient = (ingredientId) =>
  useQuery(["ingredient", ingredientId], getIngredientById);

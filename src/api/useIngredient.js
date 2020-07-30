import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const getIngredientById = async (_, ingredientId, apiKey) => {
  return fetch(
    `https://api.airtable.com/v0/appojBodpMEKCgFIP/ingredients/${ingredientId}?api_key=${apiKey}`
  ).then((res) => res.json());
};

export const useIngredient = (ingredientId) => {
  const { apiKey } = useParams();
  return useQuery(["ingredient", ingredientId, apiKey], getIngredientById);
};

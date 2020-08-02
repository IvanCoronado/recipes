import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const getIngredientCategories = async (_, apiKey) => {
  return fetch(
    `https://api.airtable.com/v0/appojBodpMEKCgFIP/ingredientCategories?api_key=${apiKey}`
  ).then((res) => res.json());
};

export const useIngredientCategories = () => {
  const { apiKey } = useParams();
  return useQuery(["ingredientCategory", apiKey], getIngredientCategories);
};

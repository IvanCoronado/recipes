import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const getRecipes = async (_, apiKey) => {
  return fetch(
    `https://api.airtable.com/v0/appojBodpMEKCgFIP/recipes?api_key=${apiKey}`
  ).then((res) => res.json());
};

export const useRecipes = () => {
  const { apiKey } = useParams();

  return useQuery(["recipes", apiKey], getRecipes);
};

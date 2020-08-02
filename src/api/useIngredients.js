import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const getIngredients = async (_, apiKey) => {
  return fetch(
    `https://api.airtable.com/v0/appojBodpMEKCgFIP/ingredients?api_key=${apiKey}`
  ).then((res) => res.json());
};

export const useIngredients = () => {
  const { apiKey } = useParams();
  return useQuery(["ingredients", apiKey], getIngredients);
};

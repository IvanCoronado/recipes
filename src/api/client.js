import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { recoverCredentials } from "localStorage";

const apiA = axios.create();

const emptyCredentials = { appId: "", apiToken: "" };

export const api = async (url) => {
  const { appId, apiToken } = recoverCredentials() || emptyCredentials;

  return apiA(
    `https://api.airtable.com/v0/${appId}/${url}?api_key=${apiToken}`
  );
};

export const RedirectWhenError = () => {
  const { push } = useHistory();

  useEffect(() => {
    apiA.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        console.log(error);
        push("/configuracion");
        return Promise.reject(error);
      }
    );
  }, [push]);

  return null;
};

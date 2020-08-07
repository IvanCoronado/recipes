import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useLocation, useHistory } from "react-router-dom";
import { queryCache } from "react-query";

import { saveCredentials, recoverCredentials } from "localStorage";

const initialValues = {
  appId: "",
  apiToken: "",
};

export const PersistForm = () => {
  const { values, setValues } = useFormikContext();
  const { replace } = useHistory();
  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search);
  const appId = query.get("appId");
  const apiToken = query.get("apiToken");

  const paramCrendetials = appId && apiToken && { appId, apiToken };

  appId && query.delete("appId");
  apiToken && query.delete("apiToken");

  if (paramCrendetials) {
    replace(`${pathname}${query.toString()}`);
  }

  useEffect(() => {
    const storedState = recoverCredentials();

    setValues(storedState || initialValues);
  }, [setValues]);

  useEffect(() => {
    if (paramCrendetials) {
      queryCache.clear();
      window.location.reload();
      setValues(paramCrendetials);
    }
  }, [setValues, paramCrendetials]);

  useEffect(() => {
    if (values) {
      saveCredentials(values);
    }
  }, [values]);

  return null;
};

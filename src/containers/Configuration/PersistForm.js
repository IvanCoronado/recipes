import { useEffect } from "react";
import { useFormikContext } from "formik";

const initialValues = {
  appId: "",
  apiToken: "",
};
export const PersistForm = () => {
  const { values, setValues } = useFormikContext();

  useEffect(() => {
    const storedState = window.localStorage.getItem("credentials");
    console.log(storedState);
    if (!!storedState) {
      setValues(JSON.parse(storedState));
    } else {
      setValues(initialValues);
    }
  }, [setValues]);

  useEffect(() => {
    if (values) {
      window.localStorage.setItem("credentials", JSON.stringify(values));
    }
  }, [values]);

  return null;
};

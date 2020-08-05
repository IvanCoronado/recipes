import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  appId: Yup.string().required("Este campo es requerido"),
  apiToken: Yup.string().required("Este campo es requerido"),
});

export const useConnect = () => {
  const { push } = useHistory();

  const handleSubmit = useCallback(() => {
    push("/plan-de-comida");
  }, [push]);

  return {
    schema,
    handleSubmit,
  };
};

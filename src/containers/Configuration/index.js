import React from "react";
import { Form, Formik, Field } from "formik";

import Header from "components/Header";
import Input from "components/Input";
import Button from "components/Button";

import { VerticalScroll } from "./styles";
import { useConnect } from "./connect";
import { PersistForm } from "./PersistForm";

export const Configuration = () => {
  const { schema, handleSubmit } = useConnect();

  return (
    <>
      <Header title="Configuración" />
      <VerticalScroll>
        <Formik validationSchema={schema} onSubmit={handleSubmit}>
          <Form noValidate>
            <Field
              name="appId"
              as={Input}
              type="text"
              label="AirTable APP Id"
            />
            <Field
              name="apiToken"
              as={Input}
              type="text"
              label="AirTable API Token"
            />
            <PersistForm />
            <Button type="submit">Entrar</Button>
          </Form>
        </Formik>
      </VerticalScroll>
    </>
  );
};

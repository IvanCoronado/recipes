import React from "react";
import { Form, Formik, Field } from "formik";

import Header from "components/Header";
import Input from "components/Input";
import Button from "components/Button";

import { VerticalScroll, Footer, Link } from "./styles";
import { useConnect } from "./connect";
import { PersistForm } from "./PersistForm";
import { ShareUrl } from "./ShareUrl";

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
            <Link
              style={{ marginTop: "20px", display: "block" }}
              href="https://www.notion.so/Tutorial-para-usar-la-aplicaci-n-3c69fcee7cb54cc0bac12fe10c1ad0b4"
            >
              Como conseguir tu APP Id y Token
            </Link>

            <ShareUrl />
            <Footer>
              <Link href="https://twitter.com/Dividivan">
                Created by IvanMaking
              </Link>
            </Footer>
          </Form>
        </Formik>
      </VerticalScroll>
    </>
  );
};

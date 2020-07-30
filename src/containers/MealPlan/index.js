import React from "react";
import { Form, Formik, FieldArray } from "formik";

import Button from "components/Button";

import { useConnect } from "./connect";
import { Container, Title, Column, FloatingActions } from "./styles";
import { DailyPlan } from "./DailyPlan";

export const MealPlan = () => {
  const { form } = useConnect();

  return (
    <Container>
      <Title>Plan de comida</Title>
      <Column>
        <Formik initialValues={form.initialValues} onSubmit={form.handleSubmit}>
          {({ values }) => (
            <Form noValidate>
              <FieldArray name="mealPlan">
                {(arrayHelpers) => (
                  <>
                    {values.mealPlan.map((day, index) => (
                      <DailyPlan
                        key={day.name}
                        name={`${arrayHelpers.name}.${index}`}
                      />
                    ))}
                    <FloatingActions>
                      <Button
                        type="button"
                        onClick={() => {
                          arrayHelpers.push({
                            name: "Miercoles",
                            id: values.mealPlan.length + 1,
                            recipes: [],
                          });
                        }}
                      >
                        Nuevo día
                      </Button>
                      <Button type="submit">Empezar plan</Button>
                    </FloatingActions>
                  </>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </Column>
    </Container>
  );
};

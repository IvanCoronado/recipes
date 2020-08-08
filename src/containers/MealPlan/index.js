import React from "react";
import { Form, Formik, FieldArray } from "formik";

import Header from "components/Header";
import { VerticalScroll } from "components/Layout";
import { BottomNav } from "components/BottomNav";

import { PersistForm } from "./PersistForm";
import { FloatingButton, AddButton } from "./styles";
import DailyPlan from "./DailyPlan";

export const MealPlan = () => {
  return (
    <>
      <Header title="Plan de comida" />
      <VerticalScroll>
        <Formik onSubmit={() => {}}>
          {({ values: { isActive, mealPlan = [] } = {}, setFieldValue }) => (
            <Form noValidate>
              <FieldArray name="mealPlan">
                {({ name, push, remove }) => (
                  <>
                    {mealPlan.map((day, index) => (
                      <DailyPlan
                        key={index}
                        name={`${name}.${index}`}
                        isActive={isActive}
                        handleRemove={remove}
                        index={index}
                      />
                    ))}
                    {!isActive && (
                      <AddButton
                        type="button"
                        variant="secondary"
                        onClick={() =>
                          push({
                            recipes: [],
                          })
                        }
                      >
                        Añadir día
                      </AddButton>
                    )}
                  </>
                )}
              </FieldArray>
              {isActive ? (
                <FloatingButton
                  type="button"
                  variant="alert"
                  onClick={() => setFieldValue("isActive", false)}
                >
                  Editar plan
                </FloatingButton>
              ) : (
                <FloatingButton
                  type="button"
                  onClick={() => setFieldValue("isActive", true)}
                >
                  Crear plan
                </FloatingButton>
              )}
              <PersistForm />
            </Form>
          )}
        </Formik>
      </VerticalScroll>
      <BottomNav />
    </>
  );
};

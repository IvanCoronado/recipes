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
                {(arrayHelpers) => (
                  <>
                    {mealPlan.map((day, index) => (
                      <DailyPlan
                        key={day.id}
                        name={`${arrayHelpers.name}.${index}`}
                        isActive={isActive}
                      />
                    ))}
                    {!isActive && (
                      <AddButton
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            id: mealPlan.length,
                            recipes: [],
                          })
                        }
                      >
                        Nuevo día
                      </AddButton>
                    )}
                  </>
                )}
              </FieldArray>
              {isActive ? (
                <FloatingButton
                  type="button"
                  onClick={() => setFieldValue("isActive", false)}
                >
                  Editar
                </FloatingButton>
              ) : (
                <FloatingButton
                  type="button"
                  onClick={() => setFieldValue("isActive", true)}
                >
                  Empezar plan
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

import React from "react";
import { Form, Formik, FieldArray } from "formik";

import Checkbox from "components/Checkbox";
import Header from "components/Header";
import { VerticalScroll } from "components/Layout";
import { BottomNav } from "components/BottomNav";

import { PersistForm } from "./PersistForm";
import { Section, SectionTitle } from "./styles";

export const Groceries = () => {
  return (
    <>
      <Header title="Lista de la compra" />
      <VerticalScroll>
        <Formik onSubmit={() => {}}>
          {({ values, setFieldValue }) => (
            <Form noValidate>
              {!!values && (
                <FieldArray name="categorizedIngredients">
                  {(categoryArrayHelpers) => (
                    <>
                      {values.categorizedIngredients.map(
                        (ingredients, categoryIndex) => (
                          <Section key={categoryIndex}>
                            <SectionTitle>
                              {ingredients[0].category}
                            </SectionTitle>
                            <FieldArray
                              name={`${categoryArrayHelpers.name}.${categoryIndex}`}
                            >
                              {(ingredientArrayHelpers) => (
                                <>
                                  {ingredients.map(
                                    (ingredient, ingredientIndex) => (
                                      <Checkbox
                                        key={ingredient.id}
                                        label={ingredient.name}
                                        checked={ingredient.checked}
                                        onChange={() =>
                                          setFieldValue(
                                            `${ingredientArrayHelpers.name}.${ingredientIndex}.checked`,
                                            !ingredient.checked
                                          )
                                        }
                                      />
                                    )
                                  )}
                                </>
                              )}
                            </FieldArray>
                          </Section>
                        )
                      )}
                    </>
                  )}
                </FieldArray>
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

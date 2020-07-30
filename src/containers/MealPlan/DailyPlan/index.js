import React from "react";
import { Field, FieldArray } from "formik";

import { RecipeCard } from "components/RecipeCard";
import { AddButtonCard } from "components/AddButtonCard";

import { Container, Title, ScrolledRow } from "./styles";

export const DailyPlan = (props) => {
  return (
    <Field name={props.name}>
      {(fieldProps) => (
        <Container>
          <Title>{fieldProps.field.value.name}</Title>
          <FieldArray name={`${fieldProps.field.name}.recipes`}>
            {(arrayHelpers) => (
              <ScrolledRow>
                {fieldProps.field.value.recipes.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    name={recipe.name}
                    onDelete={() => arrayHelpers.remove(index)}
                  />
                ))}
                <AddButtonCard
                  type="button"
                  onClick={() => {
                    arrayHelpers.push({
                      name: "Nueva recipe",
                    });
                  }}
                />
              </ScrolledRow>
            )}
          </FieldArray>
        </Container>
      )}
    </Field>
  );
};

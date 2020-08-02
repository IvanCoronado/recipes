import React, { memo } from "react";
import { Field, FieldArray } from "formik";

import { RecipeCard } from "components/RecipeCard";

import { Container, Title, ScrolledRow } from "./styles";
import { AddRecipe } from "../AddRecipe";

const DailyPlan = ({ name, isActive }) => {
  return (
    <Field name={name}>
      {(fieldProps) => (
        <Container>
          <Title>Día {fieldProps.field.value.id}</Title>
          <FieldArray name={`${fieldProps.field.name}.recipes`}>
            {(arrayHelpers) => (
              <ScrolledRow>
                {fieldProps.field.value.recipes.map((recipe, index) => (
                  <React.Fragment key={index}>
                    {isActive ? (
                      <RecipeCard
                        recipe={recipe}
                        onCheck={() => console.log("check")}
                      />
                    ) : (
                      <RecipeCard
                        recipe={recipe}
                        onDelete={() => arrayHelpers.remove(index)}
                      />
                    )}
                  </React.Fragment>
                ))}
                {!isActive && <AddRecipe arrayHelpers={arrayHelpers} />}
              </ScrolledRow>
            )}
          </FieldArray>
        </Container>
      )}
    </Field>
  );
};

export default memo(DailyPlan);

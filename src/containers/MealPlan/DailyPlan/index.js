import React, { memo } from "react";
import { Field, FieldArray } from "formik";

import { RecipeCard } from "components/RecipeCard";
import { BodyMedium as Title } from "components/Typography";
import { ScrolledRow, Header } from "components/Layout";

import { Container, Remove } from "./styles";
import { AddRecipe } from "../AddRecipe";

const DailyPlan = ({ name, isActive, handleRemove, index }) => {
  return (
    <Field name={name}>
      {(fieldProps) => (
        <Container>
          <Header>
            <Title>Día {index}</Title>
            {!isActive && (
              <Remove
                type="button"
                variant="link"
                onClick={() => handleRemove(index)}
              >
                borrar
              </Remove>
            )}
          </Header>
          <FieldArray name={`${fieldProps.field.name}.recipes`}>
            {(arrayHelpers) => (
              <ScrolledRow>
                {fieldProps.field.value.recipes.map((recipe, index) => (
                  <React.Fragment key={index}>
                    {isActive ? (
                      <RecipeCard
                        index={index}
                        recipe={recipe}
                        arrayHelpers={arrayHelpers}
                        showCheck={true}
                      />
                    ) : (
                      <RecipeCard
                        index={index}
                        recipe={recipe}
                        arrayHelpers={arrayHelpers}
                        showDelete={true}
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

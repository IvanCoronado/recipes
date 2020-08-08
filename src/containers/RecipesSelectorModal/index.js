import React from "react";

import { FullScreenModal } from "components/FullScreenModal";
import { RecipeCard } from "components/RecipeCard";
import { BodyMedium as Title } from "components/Typography";
import { ScrolledRow, Header } from "components/Layout";

import { useConnect } from "./connect";
import { Container } from "./styles";

const getTitle = (recipes) => {
  const category =
    recipes[0] &&
    recipes[0].fields &&
    recipes[0].fields.category &&
    recipes[0].fields.category[0];
  if (!category) {
    return "Otras";
  }
  const [prefix, name] = category.split(":");

  return name || prefix;
};

export const RecipesSelectorModal = ({ open, handleClose, handleSelect }) => {
  const { categories, isLoading } = useConnect();

  return (
    <FullScreenModal open={open} handleClose={handleClose} title="Recetas">
      {isLoading && <div>...</div>}
      {categories.map((recipes, index) => (
        <Container key={index}>
          <Header>
            <Title>{getTitle(recipes)}</Title>
          </Header>
          <ScrolledRow>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={handleSelect}
              />
            ))}
          </ScrolledRow>
        </Container>
      ))}
    </FullScreenModal>
  );
};

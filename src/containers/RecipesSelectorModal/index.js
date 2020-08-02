import React from "react";

import { FullScreenModal } from "components/FullScreenModal";
import { RecipeCard } from "components/RecipeCard";
import { RecipesGrid } from "components/Layout";

import { useConnect } from "./connect";

export const RecipesSelectorModal = ({ open, handleClose, handleSelect }) => {
  const { data, isLoading } = useConnect();

  return (
    <FullScreenModal open={open} handleClose={handleClose} title="Recetas">
      {!data && isLoading && <div>...</div>}
      <RecipesGrid>
        {data &&
          data.records.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={handleSelect}
            />
          ))}
      </RecipesGrid>
    </FullScreenModal>
  );
};

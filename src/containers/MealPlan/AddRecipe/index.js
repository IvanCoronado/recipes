import React, { useState, useCallback } from "react";

import { RecipesSelectorModal } from "containers/RecipesSelectorModal";

import { Button } from "./styles";

export const AddRecipe = ({ arrayHelpers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleAddClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSelect = useCallback(
    (recipe) => {
      arrayHelpers.push(recipe);
      setIsOpen(false);
    },
    [arrayHelpers]
  );

  return (
    <>
      <Button type="button" onClick={handleAddClick}>
        +
      </Button>
      <RecipesSelectorModal
        open={isOpen}
        handleClose={handleClose}
        handleSelect={handleSelect}
      />
    </>
  );
};

import React, { createContext, useContext, useState } from "react";

export const SelectedRecipesContext = createContext({});

export const SelectedRecipesProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <SelectedRecipesContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </SelectedRecipesContext.Provider>
  );
};

export const useSelectedRecipes = () => useContext(SelectedRecipesContext);

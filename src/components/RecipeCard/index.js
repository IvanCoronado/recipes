import React from "react";

export const RecipeCard = ({ name, onDelete, ...props }) => {
  return (
    <div className="recipe-card-container" {...props}>
      {name}
      <button type="button" onClick={onDelete}>
        remove
      </button>
    </div>
  );
};

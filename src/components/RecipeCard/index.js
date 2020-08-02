import React, { useCallback } from "react";

import { Container, Img, Name } from "./styles";

export const RecipeCard = ({
  recipe,
  name,
  onDelete,
  onSelect,
  onCheck,
  ...props
}) => {
  const { fields } = recipe;
  const imageSrc = fields.image && fields.image[0].thumbnails.large.url;

  const handleSelect = useCallback(() => {
    onSelect(recipe);
  }, [onSelect, recipe]);

  const propsWhenIsClickable = onSelect
    ? {
        onClick: handleSelect,
        isClickable: true,
      }
    : {};

  return (
    <Container title={fields.name} {...props} {...propsWhenIsClickable}>
      <Img src={imageSrc} />
      <Name>{fields.name}</Name>
      {onDelete && (
        <button type="button" onClick={onDelete}>
          remove
        </button>
      )}
      {onCheck && <></>}
    </Container>
  );
};

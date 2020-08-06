import React, { useCallback } from "react";

import {
  Container,
  Img,
  Name,
  ActionButton,
  RemoveIcon,
  CheckIcon,
  UncheckIcon,
} from "./styles";

export const RecipeCard = ({
  recipe,
  index,
  name,
  onSelect,
  showCheck,
  showDelete,
  arrayHelpers,
  ...props
}) => {
  const { fields } = recipe;
  const imageSrc = fields.image && fields.image[0].thumbnails.large.url;

  const handleSelect = useCallback(() => {
    onSelect(recipe);
  }, [onSelect, recipe]);

  const handleCheck = useCallback(() => {
    arrayHelpers.replace(index, {
      ...recipe,
      checked: !recipe.checked,
    });
  }, [arrayHelpers, index, recipe]);

  const handleDelete = useCallback(() => {
    arrayHelpers.remove(index);
  }, [arrayHelpers, index]);

  const propsWhenIsClickable = onSelect
    ? {
        onClick: handleSelect,
        isClickable: true,
      }
    : {};

  return (
    <Container title={fields.name} {...props} {...propsWhenIsClickable}>
      <Img src={imageSrc} disabled={recipe.checked} />
      {fields.preparation ? (
        <Name as="a" href={fields.preparation} target="_blank">
          {fields.name}
        </Name>
      ) : (
        <Name>{fields.name}</Name>
      )}
      {showDelete && (
        <ActionButton type="button" variant="secondary" onClick={handleDelete}>
          <RemoveIcon />
        </ActionButton>
      )}
      {showCheck && (
        <ActionButton type="button" variant="secondary" onClick={handleCheck}>
          {recipe.checked ? <CheckIcon /> : <UncheckIcon />}
        </ActionButton>
      )}
    </Container>
  );
};

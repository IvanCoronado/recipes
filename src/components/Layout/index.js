import styled from "styled-components";

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  max-height: 1000px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
`;

export const VerticalScroll = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const HorizontalScroll = styled.div``;

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;
  padding: 16px;
`;

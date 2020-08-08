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
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--recipe-image-height), 1fr)
  );
  grid-gap: 16px;
  padding: 16px;
`;

export const ScrolledRow = styled.div`
  display: grid;
  grid-gap: calc(var(--gutter) / 2);
  grid-template-columns: 10px;
  grid-template-rows: minmax(var(--recipe-image-height), 1fr);
  grid-auto-flow: column;
  grid-auto-columns: var(--recipe-image-height);

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * var(--gutter));
  margin-bottom: calc(-0.25 * var(--gutter));

  > button {
    width: var(--recipe-image-height);
    height: var(--recipe-image-height);
  }

  &::after,
  ::before {
    content: "";
    width: 10px;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 8px 16px;
`;

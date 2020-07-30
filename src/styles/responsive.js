import { css } from "styled-components";

const size = {
  tabletPortrait: "600px",
  tabletLandscape: "900px",
  laptop: "1200px",
  desktop: "1440px",
};

const minWidthQuery = (width) => `@media (min-width: ${width})`;

const minWidth = (width) => (first, ...args) =>
  css`
    ${minWidthQuery(width)} {
      ${css(first, ...args)};
    }
  `;

export const from = Object.keys(size).reduce(
  (acc, key) => ({
    ...acc,
    [key]: (() => {
      const mixin = minWidth(size[key]);
      mixin.query = minWidthQuery(size[key]);
      return mixin;
    })(),
  }),
  {}
);

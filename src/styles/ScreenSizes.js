import { css } from "styled-components";
import { ScreenSizes } from "./Variables";
export default Object.keys(ScreenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${ScreenSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

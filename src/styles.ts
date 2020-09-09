import { css } from "@emotion/core"

export const colors = {
  blue: "#88A3B2",
  orange: "#ba6f2e",
  offWhite: "#e3e2de",
  darkText: "#504840",
  tan: "#D8D5CA",
  darkCyan: "#5A6E6C",
  greyFilter: "#8e99a17f",
  sepiaFilter: "#504840BE",
}

export const breakPoints = {
  s: '600px',
  m: '910px',
  l: '1250px',
}

export const spacing = {
  s: "1.25rem",
  m: "2rem",
  l: "4rem",
}

export const fontType = {
  light: css`
    font-family: "Raleway", sans-serif;
    font-weight: 200;
  `,
  regular: css`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  `,
  bold: css`
    font-family: "Cabin Condensed", sans-serif;
    font-weight: 700;
  `,
}

export const fullWidth = css`
  grid-column: 1 / span 5;
`

export const allThirds = css`
  grid-column: 2 / span 3;
`

export const leftTwoThirds = css`
  grid-column: 2 / span 2;
`

export const rightTwoThirds = css`
  grid-column: 3 / span 2;
`
export const leftGutter = css`
  grid-column: 1 / span 1;
`
export const leftThird = css`
  grid-column: 2 / span 1;
`

export const centerThird = css`
  grid-column: 3 / span 1;
`

export const rightThird = css`
  grid-column: 4 / span 1;
`

export const rightGutter = css`
  grid-column: 5 / span 1;
`
export const spacer = css`
  height: 4rem;
  grid-column: 1 / span 5;
`

export const hideSmall = css`
  @media (max-width: ${breakPoints.m}) {
    display: none;
  }
`
export const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
  @media (max-width: ${breakPoints.m}) {
    column-gap: 0.3rem;
    grid-template-columns: 0.1fr 1fr 1fr 1fr 0.1fr;
  }
`

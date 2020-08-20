import { css } from "@emotion/core"

export const colors = {
  blue: "#88A3B2",
  orange: "#ba6f2e",
  offWhite: "#e3e2de",
  darkText: "#504840",
  tan: "#D8D5CA",
  darkCyan: "#5A6E6C",
  brown: "#8e99a17f",
}

export const spacing = {
  s: "1.25rem",
  m: "2rem",
  l: "4rem",
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

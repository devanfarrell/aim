/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import {
  colors,
  leftThird,
  rightTwoThirds,
  fontType,
  breakPoints,
} from "../styles"
import { Fragment } from "react"

export default function SectionLabel({ children }) {
  return (
    <Fragment>
      <h3 css={[sectionLabel, leftThird, fontType.light]}>{children}</h3>
      <div css={[block, rightTwoThirds]} />
    </Fragment>
  )
}

export const sectionLabel = css`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 50px;
  font-size: 2.4em;
  @media (max-width: ${breakPoints.s}) {
    font-size: 1.6rem;
  }
`

export const block = css`
  height: 2px;
  background-color: ${colors.blue};
  align-self: center;
`

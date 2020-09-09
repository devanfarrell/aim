/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { colors, grid, leftThird, breakPoints } from "../styles"

export default function Header() {
  return (
    <header css={[headerWrapper, grid]}>
      <Link to="/" css={[link, leftThird]}>
        home
      </Link>
      <Link to="/materials" css={link}>
        materials
      </Link>
      <Link to="/about" css={link}>
        about
      </Link>
    </header>
  )
}

const headerWrapper = css`
  background-color: ${colors.orange};
`

const link = css`
  font-family: sans-serif;
  color: ${colors.offWhite};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1rem 1rem;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${breakPoints.m}) {
    font-size: 1.2rem;
  }
`

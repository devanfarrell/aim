/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { colors } from "../styles"

export default function Header() {
  return (
    <header css={headerWrapper}>
      <div css={header}>
        <Link to="/" css={link}>
          home
        </Link>
        <Link to="/materials" css={link}>
          materials
        </Link>
        <Link to="/contribute" css={link}>
          contribute
        </Link>
        <Link to="/about" css={link}>
          about
        </Link>
      </div>
    </header>
  )
}

const headerWrapper = css`
  background-color: ${colors.orange};
  padding: 1rem 0;
`
const header = css`
  margin: 0 auto;
  max-width: 960px;
`
const link = css`
  font-family: sans-serif;
  color: ${colors.offWhite};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0 1rem;
  text-transform: uppercase;
`

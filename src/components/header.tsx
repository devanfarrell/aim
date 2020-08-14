/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

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
  background-color: #ba6f2e;
  padding: 1rem 0;
`
const header = css`
  margin: 0 auto;
  max-width: 960px;
`
const link = css`
  font-family: sans-serif;
  color: #e3e2de;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0 1rem;
  text-transform: uppercase;
`

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { colors } from "../styles"

export default function Footer() {
  return (
    <footer css={footerWrapper}>
      <div css={footerContect}>
        <a>F</a>
        <span>© AIM {new Date().getFullYear()}</span>
        <a>Contact</a>
      </div>
    </footer>
  )
}

const footerWrapper = css`
  background-color: ${colors.blue};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`
const footerContect = css`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 960px;
  flex: 1 1 auto;
`

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { colors, grid, leftThird } from "../styles"
import { FacebookLogo } from "./logo"

export default function Footer() {
  return (
    <footer css={[footerWrapper, grid]}>
      <a
        css={leftThird}
        target="_blank"
        href="https://www.facebook.com/embracegracecctc/"
      >
        <FacebookLogo css={logo} />
      </a>
      <span>© AIM {new Date().getFullYear()}</span>
      <a css={contact} href="mailto:aimcctc@gmail.com">
        Contact
      </a>
    </footer>
  )
}

const footerWrapper = css`
  background-color: ${colors.blue};
  padding: 1rem 0;
  text-align: center;
`
const logo = css`
  height: 30px;
  width: 30px;
`
const contact = css`
  color: white;
`

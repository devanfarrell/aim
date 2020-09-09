/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Logo from "./logo"
import { fullWidth, colors } from "../styles"
import { ReactNode } from "react"
import BackgroundImage, { IFluidObject } from "gatsby-background-image-es5"

interface HeroProps {
  fluidImage: IFluidObject
  children: ReactNode
}

export default function Hero({ fluidImage, children }: HeroProps) {
  return (
    <div css={[fullWidth, imgOuterWrapper]}>
      <div css={imgInnerWrapper}>
        <BackgroundImage fluid={fluidImage} css={img} />
        <div css={heroContentWrapper}>
          <Logo css={logo} />
          {children}
        </div>
      </div>
    </div>
  )
}

const imgOuterWrapper = css`
  height: 90vh;
  position: relative;
`

const imgInnerWrapper = css`
  height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const heroContentWrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
  background-color: ${colors.greyFilter};
  text-align: center;
`
const img = css`
  height: 90vh;
  width: 100%;
`

const logo = css`
  width: 300px;
  height: 300px;
`

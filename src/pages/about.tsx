/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import {
  allThirds,
  colors,
  spacing,
  leftThird,
  rightTwoThirds,
  rightThird,
  leftTwoThirds,
} from "../styles"
import { ReactNode } from "react"

export default function AboutPage() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heros/about.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delia: file(relativePath: { eq: "leaders/delia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      girls: file(relativePath: { eq: "leaders/girls.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jackie: file(relativePath: { eq: "leaders/jackie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      megan: file(relativePath: { eq: "leaders/megan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sarah: file(relativePath: { eq: "leaders/sarah.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About us" />
      <Hero fluidImage={images.hero.childImageSharp.fluid}>
        <h2>About</h2>
      </Hero>
      <div css={[allThirds, mission]}>
        <p>
          We want to provide a place for all kinds of moms to come together to
          encourage one another through the gospel and help each other grow in
          Christ while enjoying Christian fellowship so...
        </p>
        <ul css={listStyle}>
          <li>
            if you have been trying to have a baby and still have yet to
            conceive
          </li>
          <li>if you have conceived and carried your baby to Heaven</li>
          <li>if you didn't conceive but chose to adopt or foster</li>
          <li>
            if you didn't conceive but are a mother figure in someone's life
          </li>
          <li>
            if you did conceive and granted the opportunity for someone else to
            parent
          </li>
          <li>if you did conceive and choose to parent</li>
        </ul>
        <div css={welcomeWrapper}>
          ...<span css={welcome}>you are welcome to come</span>
        </div>
      </div>
      <div css={leftThird}>
        <ProfileImageWrapper fluid={images.delia.childImageSharp.fluid} />
      </div>
      <div css={rightTwoThirds}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum
        voluptas officiis nulla, minima repellendus incidunt reiciendis
        pariatur, laborum omnis quos eos dolore porro magni! Blanditiis magni
        tempore accusantium rerum?
      </div>
      <div css={leftTwoThirds}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit veniam
        laudantium quam rem consectetur ducimus a soluta suscipit pariatur
        similique! Cumque voluptatibus eos facere repellat sunt tempore veniam
        tenetur accusantium.
      </div>
      <div css={rightThird}>
        <ProfileImageWrapper fluid={images.jackie.childImageSharp.fluid} />
      </div>
      <div css={leftThird}>
        <ProfileImageWrapper fluid={images.megan.childImageSharp.fluid} />
      </div>
      <div css={rightTwoThirds}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum
        voluptas officiis nulla, minima repellendus incidunt reiciendis
        pariatur, laborum omnis quos eos dolore porro magni! Blanditiis magni
        tempore accusantium rerum?
      </div>
      <div css={leftTwoThirds}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit veniam
        laudantium quam rem consectetur ducimus a soluta suscipit pariatur
        similique! Cumque voluptatibus eos facere repellat sunt tempore veniam
        tenetur accusantium.
      </div>
      <div css={rightThird}>
        <ProfileImageWrapper fluid={images.sarah.childImageSharp.fluid} />
      </div>

      {/* <ProfileImageWrapper fluid={images.girls.childImageSharp.fluid} /> */}
    </Layout>
  )
}

interface ProfileImageWrapperProps {
  fluid: FluidObject
}
function ProfileImageWrapper({ fluid }: ProfileImageWrapperProps) {
  return (
    <div css={profileOuterWrapper}>
      <Img fluid={fluid} />
    </div>
  )
}

const profileOuterWrapper = css`
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  width: 100%;
`

const mission = css`
  padding: ${spacing.l} 0;
  color: ${colors.darkText};
`

const welcome = css`
  font-size: 2.4rem;
`

const welcomeWrapper = css`
  font-weight: bold;
  color: ${colors.darkCyan};
  text-align: right;
  margin-top: ${spacing.s};
`

const listStyle = css`
  li {
    list-style-type: none;
    margin-bottom: 0.25rem;
  }
  margin: 0;
`

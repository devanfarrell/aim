/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { meetsContrastGuidelines } from "polished"
import {
  colors,
  spacer,
  leftTwoThirds,
  rightTwoThirds,
  fullWidth,
  allThirds,
  leftThird,
  rightThird,
  centerThird,
  spacing,
} from "../styles"
import Hero from "../components/hero"

export default function IndexPage() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heros/home.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson1: file(relativePath: { eq: "lessons/beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson2: file(relativePath: { eq: "lessons/bibles.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson3: file(relativePath: { eq: "lessons/bird.jpg" }) {
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
      <SEO title="Home" />
      <Hero fluidImage={images.hero.childImageSharp.fluid}>
        <h1>Abiding in Motherhood</h1>
      </Hero>
      <div css={[allThirds, slogan]}>
        Our aim is to help nurture the hearts of mothers in every season, to
        know God's word, and abide faithfully in Christ
      </div>
      <div css={[fullWidth, verseWrapper]}>
        <div css={verse}>
          Abide in me, and I in you. As the branch cannot bear fruit by itself,
          unless it abides in the vine, neither can you, unless you abide in me.{" "}
          <br />- John 15:4
        </div>
      </div>
      <div css={spacer} />
      <div css={[block, leftTwoThirds]} />
      <h3 css={sectionLabel}>studies</h3>
      <div css={spacer} />
      {/* Programaticaly figure this crap out */}
      <div css={leftThird}>
        <Img css={lessonImage} fluid={images.lesson1.childImageSharp.fluid} />
        <a css={lessonLink(colors.tan)}>week 1</a>
      </div>
      <div css={centerThird}>
        <Img css={lessonImage} fluid={images.lesson2.childImageSharp.fluid} />
        <a css={lessonLink(colors.darkCyan)}>week 2</a>
      </div>
      <div css={rightThird}>
        <Img css={lessonImage} fluid={images.lesson3.childImageSharp.fluid} />
        <a css={lessonLink(colors.tan)}>week 3</a>
      </div>
      <div css={spacer} />
      <h3 css={[sectionLabel, leftThird]}>calendar</h3>
      <div css={[block, rightTwoThirds]} />
      <div css={spacer} />
    </Layout>
  )
}

const slogan = css`
  font-weight: bold;
  color: ${colors.darkText};
  line-height: 2;
  font-size: 2rem;
  padding: ${spacing.l} 0;
`

const verseWrapper = css`
  background-color: ${colors.tan};
  padding: ${spacing.l} 0;
`
const verse = css`
  text-align: right;
  color: ${colors.darkText};
  width: 60%;
  margin: 0 auto;
  font-size: 2.2rem;
  font-weight: light;
  line-height: 2;
`

const block = css`
  height: 20px;
  background-color: ${colors.blue};
  align-self: center;
`
const sectionLabel = css`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 50px;
  font-weight: 900;
`

const lessonLink = (backgroundColor: string) => css`
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  color: ${meetsContrastGuidelines(backgroundColor, colors.darkText).AA
    ? colors.darkText
    : colors.offWhite};
`

const lessonImage = css`
  height: 600px;
  width: 100%;
`

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Logo from "../components/logo"
import BackgroundImage from "gatsby-background-image-es5"

export default function IndexPage() {
  const queryResult = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "split-field.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div css={[fullWidth, imgOuterWrapper]}>
        <div css={imgInnerWrapper}>
          <BackgroundImage
            fluid={queryResult.placeholderImage.childImageSharp.fluid}
            css={img}
          />
          <div css={heroContentWrapper}>
            <Logo
              css={css`
                width: 300px;
                height: 300px;
              `}
            />
            <h1>Abiding in Motherhood</h1>
          </div>
        </div>
      </div>
      <div css={slogan}>
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
    </Layout>
  )
}

const fullWidth = css`
  grid-column: 1 / span 5;
`
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

const img = css`
  height: 90vh;
  width: 100%;
`

const slogan = css`
  grid-column: 2 / span 3;
  font-weight: bold;
  color: #504840;
  line-height: 2;
  font-size: 2rem;
  padding: 4rem 0;
`

const verseWrapper = css`
  background-color: #d8d5ca;
  padding: 4rem 0;
`
const verse = css`
  text-align: right;
  color: #504840;
  width: 60%;
  margin: 0 auto;
  font-size: 2.2rem;
  font-weight: light;
  line-height: 2;
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
  background-color: #8E99A17F;
`

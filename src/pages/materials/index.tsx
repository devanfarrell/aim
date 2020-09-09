/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/hero"
import { spacer, leftThird } from "../../styles"
import SectionLabel from "../../components/sectionLabel"
import MaterialLink from "../../components/materialLink"

export default function AboutPage() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heros/materials.jpg" }) {
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
      <SEO title="About us" />
      <Hero fluidImage={images.hero.childImageSharp.fluid}>
        <h1>Materials</h1>
      </Hero>
      <div css={spacer} />
      <SectionLabel>All Materials</SectionLabel>
      <div css={spacer} />
      <MaterialLink css={leftThird} lesson={1} />
      <MaterialLink lesson={2} />
      <MaterialLink lesson={3} />
      <MaterialLink css={leftThird} lesson={4} />
      <MaterialLink lesson={5} />
      <MaterialLink lesson={6} />
      <MaterialLink css={leftThird} lesson={7} />
      <MaterialLink lesson={8} />
    </Layout>
  )
}

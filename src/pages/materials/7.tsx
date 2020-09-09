/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson7() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MaterialPage
      fluidImage={images.hero.childImageSharp.fluid}
      lessonName="Speaking with Wisdom"
    >
      <div css={allThirds}>
        "We need to ask God to help us to confess our own misdeeds and to help
        us forgive others for what they have done to us. In doing so, we take
        one more step of obedience and allow ourselves to have more of God's
        grace, while also giving God's grace to those around us"....
      </div>
    </MaterialPage>
  )
}

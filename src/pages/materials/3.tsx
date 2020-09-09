/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson3() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/3.jpg" }) {
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
      lessonName="Holy Spirit"
    >
      <div css={allThirds}>
        "Going to God and His word (through the power of the Holy Spirit) first
        to combat wrong thinking is like training our bodies. It takes
        repetition and time. At first it takes every bit of intention toward
        turning our minds to God and His Word"............
      </div>
    </MaterialPage>
  )
}

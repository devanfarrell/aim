/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson6() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/2.jpg" }) {
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
      lessonName="Anger"
    >
      <div css={allThirds}>
        "Your anger may not manifest itself with yelling, screaming,or throwing
        things; Your anger may be living in pride or bitterness. Your silent
        anger is just as offensive to God as explosive anger. How are you prone
        to expressing your anger?".......
      </div>
    </MaterialPage>
  )
}

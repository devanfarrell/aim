/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson5() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/5.jpg" }) {
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
      lessonName="Burden of Motherhood"
    >
      <div css={allThirds}>
        "If each person only focuses on loving and serving themselves, there is
        nothing left for anyone else! If each person focused on loving and
        serving others first, we would all be taken care of by each other."....
      </div>
    </MaterialPage>
  )
}

/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson8() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/8.jpg" }) {
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
      lessonName="Forgiveness"
    >
      <div css={allThirds}>
        "It will affect how you live, how you raise your kids, how you
        discipline, how you treat your family, how you respond to trials, how
        you think, what your values are, how you treat others and all of that
        hangs on this point of who you believe God to be"......... To be
        continued
      </div>
    </MaterialPage>
  )
}

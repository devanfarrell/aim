/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson4() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "lessons/4.jpg" }) {
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
      lessonName="Fruit of the Spirit"
    >
      <div css={allThirds}>
        "As we continue to ask God to help us grow our fruit, we must remember
        not all fruit grows at the same time. Each fruit has its seasons and God
        will help you grow your fruit on your own time , so don't compare your
        fruit growth to someone else. Diligently water what God has called you
        to water.".....
      </div>
    </MaterialPage>
  )
}

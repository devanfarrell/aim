/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import { allThirds } from "../../styles"
import MaterialPage from "../../components/materialPage"

export default function Lesson2() {
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
      lessonName="Jesus: The Reckless Love of God"
    >
      <div css={allThirds}>
        "The overwhelming, neverending, reckless love of God is demonstrated in
        that He gave us His only Son, Jesus.Psalm 139 is one of my favorite
        passages that reveals God’s heart for us and our babies."...........
      </div>
    </MaterialPage>
  )
}

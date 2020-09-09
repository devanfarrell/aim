/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { meetsContrastGuidelines } from "polished"
import { colors, spacing } from "../styles"

interface MaterialLinkProps {
  lesson: number
}

export default function MaterialLink({ lesson, ...props }: MaterialLinkProps) {
  const images = useStaticQuery(graphql`
    query {
      lesson1: file(relativePath: { eq: "lessons/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson2: file(relativePath: { eq: "lessons/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson3: file(relativePath: { eq: "lessons/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson4: file(relativePath: { eq: "lessons/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson5: file(relativePath: { eq: "lessons/5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson6: file(relativePath: { eq: "lessons/6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson7: file(relativePath: { eq: "lessons/7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lesson8: file(relativePath: { eq: "lessons/8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div css={wrapper} {...props}>
      <Img
        css={lessonImage}
        fluid={images[`lesson${lesson}`].childImageSharp.fluid}
      />
      <Link
        to={`/materials/${lesson}`}
        css={lessonLink(lesson % 2 ? colors.tan : colors.darkCyan)}
      >
        lesson {lesson}
      </Link>
    </div>
  )
}

const lessonLink = (backgroundColor: string) => css`
  display: flex;
  height: 40px;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  cursor: pointer;
  color: ${meetsContrastGuidelines(backgroundColor, colors.darkText).AA
    ? colors.darkText
    : colors.offWhite};
`

const lessonImage = css`
  height: 600px;
  width: 100%;
`

const wrapper = css`
  padding-bottom: ${spacing.s};
`

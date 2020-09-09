/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import {
  allThirds,
  colors,
  spacing,
  leftThird,
  rightTwoThirds,
  rightThird,
  leftTwoThirds,
  spacer,
  fontType,
} from "../styles"
import SectionLabel from "../components/sectionLabel"

export default function AboutPage() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heros/about.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      delia: file(relativePath: { eq: "leaders/delia2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jackie: file(relativePath: { eq: "leaders/jackie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      megan: file(relativePath: { eq: "leaders/megan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sarah: file(relativePath: { eq: "leaders/sarah.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kristi: file(relativePath: { eq: "leaders/kristi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
        <h1>About</h1>
      </Hero>
      <div css={spacer} />
      <SectionLabel>mission</SectionLabel>
      <div css={[allThirds, mission]}>
        <p>
          We want to provide a place for all kinds of moms to come together to
          encourage one another through the gospel and help each other grow in
          Christ while enjoying Christian fellowship so...
        </p>
        <ul css={listStyle}>
          <li>If you are currently pregnant</li>
          <li>
            if you have been trying to have a baby and still have not conceived
          </li>
          <li>if you have conceived and carried your baby to heaven</li>
          <li>if you have chosen to adopt or foster</li>
          <li>
            if you have not conceived but are a mother figure in someone's life
          </li>
          <li>
            if you have conceived and granted the opportunity for someone else
            to parent
          </li>
          <li>if you have conceived and chose to parent</li>
        </ul>
        <div css={[welcomeWrapper, fontType.bold]}>
          <span css={welcomeEllipses}>...</span>you are welcome to come
        </div>
      </div>
      <SectionLabel>leaders</SectionLabel>
      <div css={spacer} />

      <ProfileWrapper images={images} name="delia">
        I have been truly blessed to have two beautiful kids with my husband of
        12 years. When I first found out I was pregnant I was terrified to be
        called mom because I understood what an important role motherhood was
        and I didnt want to screw it up.I was lucky enough to have the help of
        some great christian women who came alongside me and led me deeper into
        the Gospel. I was able to grow deeper in gods word and be the mom that
        God has called me to be.My AIM is that i can help provide the same
        encouragement during those hard momma moments and walk alongside you in
        your motherhood journey.
      </ProfileWrapper>
      <ProfileWrapper right images={images} name="megan">
        I am a mom who had an unexpected pregnancy with a man I hadn't known for
        very long. I am now married to that man and have two amazing boys. God
        saved me through my husband and my children know walk in the love of
        God.
      </ProfileWrapper>
      <ProfileWrapper images={images} name="sarah">
        I'm just a sinner saved by grace; therefore, I am a bondservant of the
        Lord Most High. Jesus saved me from the mess I had created and gave me a
        wonderful family. My husband and I have three beautiful children on
        earth and two in Heaven (despite being told repeatedly that I wouldn't
        be able to have children). I believe that God never wastes our pain but
        makes something beautiful out of ashes.
      </ProfileWrapper>
      <ProfileWrapper right images={images} name="kristi">
        Coming soon...
      </ProfileWrapper>
      <div css={spacer} />
    </Layout>
  )
}

interface ProfileWrapperprops {
  name: string
  images: any
  right?: boolean
  children: string
}

function ProfileWrapper({
  name,
  right = false,
  images,
  children,
}: ProfileWrapperprops) {
  const img = images[name].childImageSharp.fluid as FluidObject
  return right ? (
    <Fragment>
      <div css={[leftTwoThirds, aboutText]}>
        <div>
          <h4 css={fontType.light}>{name}</h4>
          {children}
        </div>
      </div>
      <ProfileImageWrapper css={rightThird} fluid={img} />
    </Fragment>
  ) : (
    <Fragment>
      <ProfileImageWrapper css={leftThird} fluid={img} />
      <div css={[rightTwoThirds, aboutText]}>
        <div>
          <h4 css={fontType.light}>{name}</h4>
          {children}
        </div>
      </div>
    </Fragment>
  )
}

interface ProfileImageWrapperProps {
  fluid: FluidObject
}
function ProfileImageWrapper({ fluid, ...props }: ProfileImageWrapperProps) {
  return (
    <div css={profileOutterWapper} {...props}>
      <div css={profileInnerWrapper}>
        <Img fluid={fluid} />
      </div>
    </div>
  )
}

const profileOutterWapper = css`
  display: flex;
  align-items: center;
`

const profileInnerWrapper = css`
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  width: 100%;
  border-radius: 1000px;
`

const mission = css`
  padding: ${spacing.l} 0;
  color: ${colors.darkText};
`

const welcomeWrapper = css`
  color: ${colors.darkCyan};
  text-align: right;
  margin-top: ${spacing.s};
  font-size: 2.4rem;
`

const welcomeEllipses = css`
  font-size: 1.2rem;
`

const listStyle = css`
  li {
    list-style-type: none;
    margin-bottom: 0.25rem;
  }
  margin: 0;
`

const aboutText = css`
  display: flex;
  align-items: center;
  padding: ${spacing.s};
  h4 {
    text-transform: capitalize;
    font-size: 2em;
  }
`

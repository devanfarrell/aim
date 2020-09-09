/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  colors,
  spacer,
  fullWidth,
  allThirds,
  leftThird,
  spacing,
  hideSmall,
  grid,
  breakPoints,
  fontType,
} from "../styles"
import Hero from "../components/hero"
import BackgroundImage, { IFluidObject } from "gatsby-background-image-es5"
import SectionLabel from "../components/sectionLabel"
import MaterialLink from "../components/materialLink"

export default function IndexPage() {
  const images = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "heros/home.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calendar: file(relativePath: { eq: "heros/calendar.jpg" }) {
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
      <SEO title="Home" />
      <Hero fluidImage={images.hero.childImageSharp.fluid}>
        <h1>Abiding in Motherhood</h1>
      </Hero>
      <div css={[allThirds, slogan, fontType.bold]}>
        Our aim is to help nurture the hearts of mothers in every season, to
        know God's word, and abide faithfully in Christ
        <div css={quote}>- AIM leaders</div>
      </div>
      <div css={spacer} />
      <SectionLabel>studies</SectionLabel>
      <div css={spacer} />
      {/* Programaticaly figure this crap out */}
      <MaterialLink css={leftThird} lesson={1} />
      <MaterialLink lesson={2} />
      <MaterialLink lesson={3} />
      <div css={spacer} />
      <div css={[fullWidth, verseWrapper]}>
        <div css={[verse, fontType.light]}>
          Abide in me, and I in you. As the branch cannot bear fruit by itself,
          unless it abides in the vine, neither can you, unless you abide in me.
          <br />- John 15:4
        </div>
      </div>
      <div css={spacer} />
      <SectionLabel>calendar</SectionLabel>
      <div css={spacer} />
      <Calendar fluidImage={images.calendar.childImageSharp.fluid} />
    </Layout>
  )
}

interface CalendarProps {
  fluidImage: IFluidObject
}

function Calendar({ fluidImage }: CalendarProps) {
  return (
    <div css={[fullWidth, imgOuterWrapper]}>
      <div css={imgInnerWrapper}>
        <BackgroundImage fluid={fluidImage} css={calendarImg} />
        <div css={[calendarContentWrapper, grid]}>
          <CalendarElement
            css={conditionalStart}
            date={new Date("9/14/2020")}
            title="Jesus and the Truth about Sin"
          />
          <CalendarElement
            date={new Date("9/21/2020")}
            title="The Holy Spirit"
          />
          <CalendarElement
            date={new Date("9/28/2020")}
            title="Sharing Your Gifts"
          />
          <CalendarElement
            css={hideSmall}
            date={new Date("10/5/2020")}
            title='"Sacrificial" Love'
          />
          <CalendarElement
            css={hideSmall}
            date={new Date("10/12/2020")}
            title="A Quiet Response"
          />
        </div>
      </div>
    </div>
  )
}

interface CalendarElementprops {
  date: Date
  title: string
}

// prettier-ignore
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

function CalendarElement({ date, title, ...props }: CalendarElementprops) {
  const day = date.getDate()
  const month = months[date.getMonth()]

  return (
    <div {...props} css={calendarElementStyle}>
      <div css={[monthStyle, fontType.bold]}>{day}</div>
      <div css={[monthStyle, fontType.bold]}>{month}</div>
      <div css={eventTitleStyle}>{title}</div>
    </div>
  )
}

const conditionalStart = css`
  @media (max-width: ${breakPoints.m}) {
    grid-column: 2 / span 1;
  }
`

const calendarElementStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0.6rem;
`

const monthStyle = css`
  text-transform: uppercase;
  font-size: 4.2rem;
  padding-top: 2.4rem;
  @media (max-width: ${breakPoints.m}) {
    font-size: 3.2rem;
  }
`

const eventTitleStyle = css`
  font-size: 2.4rem;
  text-align: center;
  padding-top: 4.8rem;
  @media (max-width: ${breakPoints.m}) {
    font-size: 1.6rem;
  }
`

const calendarContentWrapper = css`
  position: absolute;
  color: white;
  width: 100%;
  height: 100%;
  background-color: ${colors.sepiaFilter};
`

const imgOuterWrapper = css`
  position: relative;
`

const imgInnerWrapper = css`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const calendarImg = css`
  width: 100%;
  height: 36rem;
`

const slogan = css`
  font-weight: bold;
  color: ${colors.darkText};
  line-height: 2;
  font-size: 2.4rem;
  padding: ${spacing.l} 0;
`

const verseWrapper = css`
  background-color: ${colors.tan};
  padding: ${spacing.l} 0;
`
const verse = css`
  text-align: right;
  color: ${colors.darkText};
  width: 60%;
  margin: 0 auto;
  font-size: 2.2rem;
  line-height: 2;

  @media (max-width: ${breakPoints.m}) {
    width: 93%;
  }
`
const quote = css`
  text-align: right;
`

/** @jsx jsx */
import { jsx } from "@emotion/core"
import Layout from "./layout"
import SEO from "./seo"
import Hero from "./hero"
import { spacer } from "../styles"
import { IFluidObject } from "gatsby-background-image-es5"
import { ReactNode } from "react"

interface MaterialPageProps {
  fluidImage: IFluidObject
  lessonName: string
  children: ReactNode
}

export default function MaterialPage({
  fluidImage,
  lessonName,
  children,
}: MaterialPageProps) {
  return (
    <Layout>
      <SEO title={lessonName} />
      <Hero fluidImage={fluidImage}>
        <h1>{lessonName}</h1>
      </Hero>
      <div css={spacer} />
      {children}
      <div css={spacer} />
    </Layout>
  )
}

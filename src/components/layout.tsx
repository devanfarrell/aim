/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Fragment, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Header />
      <div>
        <main css={grid}>{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

const grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
`

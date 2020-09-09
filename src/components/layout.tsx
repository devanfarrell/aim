/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Fragment, ReactNode } from "react"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"
import { grid } from "../styles"

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

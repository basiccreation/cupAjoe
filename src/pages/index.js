import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Very Beautiful People</h1>
    <p>Added Navbar waiting for it to populate.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"
import Info from "../components/Info"
import Menu from "../components/Menu"
import Products from "../components/Products"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="cup-a-joe"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCafeDrinks {
      edges {
        node {
          id
          title
          descripton {
            descripton
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage

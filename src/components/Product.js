import React from "react"
import Img from "gatsby-image"
export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
      </div>
    </div>
  )
}

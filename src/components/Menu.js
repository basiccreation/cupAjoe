import React, { Component } from "react"
import Title from "./Title"
import Img from "gatsby-image"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col">
                <h1>these are our items</h1>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6mx-auto text-center capitalize">
                <h1>there are no item to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

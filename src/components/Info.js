import React from "react"
import { Link } from "gatsby"
import Title from "./Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center" />

          <p className="lead text-muted mb-5">
            Verve came to be through the serendipitous union of surf, sweat and 
    a love of life and living. In 2007, founders Ryan and Colby built and opened 
    the first Verve cafe on 41st Ave in Santa Cruz, California. Today, Verve has 
    locations in cities from Los Angeles to San Francisco to Japan, but our roots 
    remain planted in Santa Cruz, where we roast our coffee on vintage roasters 
    and enjoy the endless surf of the rugged California coast. 
          </p>
          <p className="lead text-muted mb-5">
            Our Farmlevel Initiative supports every hand that holds our coffee, 
    from seed to cup, positively impacting communities at the local and global 
    level. By connecting you with farmers, the Initiative creates an open line of 
    communication that transcends distance, language and culture. The Farmlevel 
    Initiative is vital to the future of coffee. Farmlevel shows farmers that their 
    work matters, their attention to detail is noticed, and that we support them. 
    We pay our farmers premiums for quality coffees through direct trade 
    relationships. Our direct trade practice allows us to exceed Fair Trade 
    minimums every time, no exceptions.
          </p>
        </div>
      </div>
    </section>
  )
}

import React from "react"
import Title from "./Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />

      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form>
          {/*name*/}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="jo smith"
            />
            {/*email*/}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="jsmith@example.com"
            />
            {/*description*/}
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="5"
              placeholder="your text goes here"
            />
            <button
              type="submit"
              className="btn-yellow btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

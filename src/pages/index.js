import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n - 1) + "..." : str
}
var faker = require("faker")
const elements = ["1", "2", "3", "4", "5", "6"]
const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div className="container main">
      {elements.map((value, index) => {
        return (
          <div className="row post" key={index}>
            <div className="col">
              <div className="card border-light">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-5 d-none d-xl-block d-lg-block">
                    <img src="https://via.placeholder.com/300x200" className="card-img" alt="..."/>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                    <div className="card-body">
                      <h5 className="card-title">{truncate(faker.lorem.sentences(1), 50)}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {faker.random.number({ min: 0, max: 12, precision: 1 })}/{faker.random.number({
                        min: 0,
                        max: 30,
                        precision: 1
                      })}/2020
                      </h6>
                      <p className="card-text">
                        {truncate(faker.lorem.paragraph(5), 255)}
                      </p>
                      <a href="/" className="card-link">Read More</a>
                      <a href="/" className="card-link">Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage

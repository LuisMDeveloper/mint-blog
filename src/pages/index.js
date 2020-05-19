import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

var faker = require("faker")
const elements = ["1", "2", "3", "4", "5", "6"]
const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div className="profile-jumbotron">
      <div className="container">
        <div className="profile-image">
          <img src="https://placekitten.com/300/300" alt="placeholder" className="img-thumbnail rounded-circle"/>
        </div>
        <div className="profile-overview">
          <h1 className="display-4">Luis Manuel Ramirez Vargas</h1>
          <p>iOS software developer with seven years experience. I make it my goal to
            create software with the user in mind, creating applications with a useable and intuitive user interface
            experience. I also understand the importance of creating highly readable and easily maintainable source
            code. I am constantly striving to learn new technologies and look to ways to better myself in this rapidly
            changing industry.</p>
          <hr className="my-4"/>
          <h3>
            <i className="fab fa-github-square"/>
          </h3>
        </div>
      </div>
    </div>
    <div className="container main">
      {elements.map((value, index) => {
        return (
          <div className="row post" key={index}>
            <div className="col post">
              <img src="https://placekitten.com/400/260" alt="placeholder" className="rounded"/>
              <div className="post-overview">
                <h5>{faker.lorem.sentences(1)}</h5>
                <p>{faker.random.number({ min: 0, max: 12, precision: 1 })}/{faker.random.number({
                  min: 0,
                  max: 30,
                  precision: 1
                })}/2020</p>
                <p>{faker.lorem.paragraph(5)}</p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage

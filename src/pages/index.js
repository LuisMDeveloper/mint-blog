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
        <div className="row d-flex align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <img src="https://placekitten.com/300/300" alt="placeholder" className="img-thumbnail rounded-circle"/>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h1 className="display-4">Luis Manuel Ramirez Vargas</h1>
            <p>@LuisMDeveloper</p>
            <p>iOS software developer with seven years experience. I make it my goal to
              create software with the user in mind, creating applications with a useable and intuitive user interface
              experience. I also understand the importance of creating highly readable and easily maintainable source
              code. I am constantly striving to learn new technologies and look to ways to better myself in this rapidly
              changing industry.</p>
            <hr className="my-4"/>
            <div className="icon-row d-flex justify-content-start">
              <i className="fab fa-github-square fa-2x"/>
              <i className="fab fa-twitter-square fa-2x"/>
              <i className="fas fa-envelope-square fa-2x"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container main">
      {elements.map((value, index) => {
        return (
          <div className="row post d-flex align-items-center" key={index}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img src="https://placekitten.com/550/350" alt="placeholder" className="img-fluid rounded"/>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
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
        )
      })}
    </div>
  </Layout>
)

export default IndexPage

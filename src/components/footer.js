import React from "react"
import Image from "./image"

var faker = require("faker")

let widths = ["w-25", "w-50", "w-75", "w-100"]
let colors = ["bg-success", "bg-info", "bg-warning", "bg-danger"]

class Footer extends React.Component {
  render() {
    return <footer id="footer">
      <div className="container d-flex">
        <div>
          <Image/>
        </div>
        <div id="footer-about-me">
          <h2>Luis Manuel Ramirez Vargas</h2>
          <h4>iOS Developer</h4>
          <p>Results-oriented software developer and research professional with seven years experience in both
            development and research positions. I make it my goal to create software with the user in mind, creating
            applications with a useable and intuitive user interface experience. I also understand the importance of
            creating highly readable and easily maintainable source code. I am constantly striving to learn new
            technologies and look to ways to better myself in this rapidly changing industry.</p>
          <hr/>
          <h4>Skills</h4>
          <div id="skill-badges">
            <span className="badge badge-warning">Xcode</span>
            <span className="badge badge-danger">Swift</span>
            <span className="badge badge-danger">StoryBoards</span>
            <span className="badge badge-warning">SwiftUI</span>
            <span className="badge badge-light">Design Assets Integration</span>
            <span className="badge badge-light">Networking Integration</span>
            <span className="badge badge-success">iOS Concurrency</span>
            <span className="badge badge-light">Realm</span>
            <span className="badge badge-success">Firebase</span>
            <span className="badge badge-light">Core Data</span>
            <span className="badge badge-danger">Cocoapods</span>
            <span className="badge badge-light">Swift Package Manager</span>
            <span className="badge badge-danger">Unit Testing</span>
            <span className="badge badge-danger">Git</span>
            <span className="badge badge-success">GitHub</span>
            <span className="badge badge-warning">Design Patterns</span>
          </div>
          <hr/>
          <h4>Skills</h4>
          {["Xcode", "Swift", "StoryBoards", "SwiftUI", "Design Assets Integration", "Networking Integration", "iOS Concurrency", "Realm", "Firebase", "Core Data", "Cocoapods", "Swift Package Manager", "Unit Testing", "Git", "GitHub", "Design Pattern"].map((value, index) => {
            return (
              <div className="skill" key={index}>
                <h6>{value}</h6>
                <div className="progress">
                  <div className={"progress-bar progress-bar-striped " + widths[faker.random.number({
                    min: 0,
                    max: 3,
                    precision: 1
                  })] + " " + colors[faker.random.number({ min: 0, max: 3, precision: 1 })]} role="progressbar"
                       aria-valuenow="75" aria-valuemin="0"
                       aria-valuemax="100"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  }
}

export default Footer
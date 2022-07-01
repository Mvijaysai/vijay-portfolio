import React, { Component } from "react";
class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-center">
          <div className="cc-profile-image">
            <a href="#">
              <img src="images/anthony.jpeg" alt="Image" />
            </a>
          </div>
          <div style={{ fontSize: "2.5em" }} className="title">
            Vijay Sai Madugula
          </div>
          <div>
            <span
              style={{ fontSize: 20 }}
              className="category text-white"
              id="typed"
            ></span>
          </div>
          <a
            className="btn btn-primary smooth-scroll mr-2"
            href="#contact"
            data-aos="zoom-in"
            data-aos-anchor="data-aos-anchor"
          >
            Hire Me
          </a>
          <a
            className="btn btn-primary"
            href="https://docs.google.com/document/d/1hUtd1QI1_VKKCLJrDDKPJFildeQvF0BJ/edit?usp=sharing&ouid=107145014403884074263&rtpof=true&sd=true"
            data-aos="zoom-in"
            data-aos-anchor="data-aos-anchor"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
}
export default Profile;

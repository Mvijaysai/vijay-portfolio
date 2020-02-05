import React, { Component } from "react";
class Experience extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="section" id="experience">
            <div className="container cc-experience">
              <div className="h4 text-center mb-4 title">Work Experience</div>

              <div
                className="col-md-9"
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-duration="500"
              >
                <div className="card">
                  <div className="row">
                    <div
                      className="col-md-3 bg-primary"
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body cc-experience-header">
                        <p>November 2019 - February 2020</p>
                        <div className="h5">Intern</div>
                      </div>
                    </div>
                    <div
                      className="col-md-9"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      data-aos-duration="500"
                    >
                      <div className="card-body">
                        <div className="h5">Stellent Soft Pvt.Ltd</div>
                        <p>Did my 3 months Internship on MEANSTACK.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Experience;

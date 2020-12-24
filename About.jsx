import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">About</div>
                  <p>Hello! I am Vijaysai Madugula. Web Developer.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <div className="h4 mt-0 title">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Date Of Birth:</strong>
                    </div>
                    <div className="col-sm-8">23-06-1998</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Email:</strong>
                    </div>
                    <div className="col-sm-8">vijaysaimadugula@gmail.com</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Phone:</strong>
                    </div>
                    <div className="col-sm-8">+91 9951425204</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Address:</strong>
                    </div>
                    <div className="col-sm-8">
                      1-23, MALAKAM,PONDURU,SRIKAKULAM,ANDHRA PRADESH,532168
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4">
                      <strong className="text-uppercase">Languages:</strong>
                    </div>
                    <div className="col-sm-8">English,Telugu,Hindi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

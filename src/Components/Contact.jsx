import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div className="section" id="contact">
        <div
          className="cc-contact-information"
          style={{ backgroundImage: 'url("images/staticmap.png")' }}
        >
          <div className="container">
            <div className="cc-contact">
              <div className="row">
                <div className="col-md-9">
                  <div className="card mb-0" data-aos="zoom-in">
                    <div className="h4 text-center title">Contact Me</div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="mb-0">
                            <strong>Address </strong>
                          </p>
                          <p className="pb-2">
                            1-23,Main Street,
                            Malakam,Ponduru,Srikakulam,
                            AndhraPradesh,532168
                          </p>
                          <p className="mb-0">
                            <strong>Phone</strong>
                          </p>
                          <p className="pb-2">+91-9951425204</p>
                          <p className="mb-0">
                            <strong>Email</strong>
                          </p>
                          <p>vijaysaimadugula@gmail.com</p>
                        </div>
                      </div>
                    </div>
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
export default Contact;

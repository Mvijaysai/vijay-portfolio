import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center">
          <a
            className="cc-facebook btn btn-link"
            href="https://www.facebook.com/vijay.sai.927543"
          >
            <i className="fa fa-facebook fa-2x " aria-hidden="true"></i>
          </a>
          <a
            className="cc-twitter btn btn-link "
            href="https://twitter.com/vijaysaimadugu1"
          >
            <i className="fa fa-twitter fa-2x " aria-hidden="true"></i>
          </a>
          <a
            className="cc-google-plus btn btn-link"
            href="https://github.com/Mvijaysai"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="cc-instagram btn btn-link"
            href="https://www.instagram.com/vijaysai_madugula/?hl=en"
          >
            <i className="fa fa-instagram  fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="h4 title text-center">Vijay Sai Madugula</div>
        <div className="text-center text-muted"></div>
      </footer>
    );
  }
}
export default Footer;

import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <div className="container text-center text-md-left pad-bottom">
          <div className="row text-center text-md-left mt-3 ml-lg-5 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Links</h6>
              <p>
                <a href="#!">Home</a>
              </p>
              <p>
                <a href="#!">Company</a>
              </p>
              <p>
                <a href="#!">About Us</a>
              </p>
              <p>
                <a href="#!">Terms & Condition</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Company</h6>
              <p>
                <a href="#!">Careers</a>
              </p>
              <p>
                <a href="#!">Blog</a>
              </p>
              <p>
                <a href="#!">Clients</a>
              </p>
              <p>
                <a href="#!">Privacy Policy</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Support</h6>
              <p>
                <a href="#!">Team</a>
              </p>
              <p>
                <a href="#!">Blog</a>
              </p>
              <p>
                <a href="#!">Clients</a>
              </p>
              <p>
                <a href="#!">Privacy Policy</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Contact</h6>
              <p>demo@mail.com</p>
              <p>+ 01 234 567 88</p>
              <div className="text-center text-md-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="google btn-floating btn-sm mx-1">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="facebook btn-floating btn-sm mx-1">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="linkedin btn-floating btn-sm mx-1">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

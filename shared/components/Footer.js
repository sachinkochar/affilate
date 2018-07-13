import React, { Component } from 'react';
import Paragraph from './common/Paragraph';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <div className="container text-center text-md-left pad-bottom">
          <div className="row text-center text-md-left mt-3 ml-lg-5 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Links</h6>
              <Paragraph text="Home"/>
              <Paragraph text="Company"/>
              <Paragraph text="About Us"/>
              <Paragraph text="Terms & Condition"/>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Company</h6>
              <Paragraph text="Careers"/>
              <Paragraph text="Blog"/>
              <Paragraph text="Clients"/>
              <Paragraph text="Privacy Policy"/>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Support</h6>
              <Paragraph text="Team"/>
              <Paragraph text="Blog"/>
              <Paragraph text="Clients"/>
              <Paragraph text="Privacy Policy"/>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="mb-4 font-weight-bold">Contact</h6>
              <Paragraph text="demo@mail.com"/>
              <Paragraph text="+ 01 234 567 88"/>
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

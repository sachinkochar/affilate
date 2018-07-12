import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <section className="mt-3 wow fadeIn">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h1 className="text-center py-4 color-primary mb-4">Sign Up</h1>
                <div className="card mx-xl-5">
                  <div className="card-body mt-5">
                    <form action="looking-for.html">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input type="text" id="defaultFormCardNameEx" className="form-control" />
                          <label
                            htmlFor="defaultFormCardNameEx"
                            className="base-text font-weight-light mb-3"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="col-md-6 mb-4">
                          <input type="text" id="defaultFormCardNameEx" className="form-control" />
                          <label
                            htmlFor="defaultFormCardNameEx"
                            className="base-text font-weight-light mb-3"
                          >
                            Last Name
                          </label>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <input type="text" id="defaultFormCardNameEx" className="form-control" />
                          <label
                            htmlFor="defaultFormCardNameEx"
                            className="base-text font-weight-light mb-3"
                          >
                            User Name
                          </label>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            type="password"
                            id="defaultFormCardNameEx"
                            className="form-control"
                          />
                          <label
                            htmlFor="defaultFormCardNameEx"
                            className="base-text font-weight-light mb-3"
                          >
                            Password
                          </label>
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="password"
                            id="defaultFormCardNameEx"
                            className="form-control"
                          />
                          <label
                            htmlFor="defaultFormCardNameEx"
                            className="base-text font-weight-light mb-3"
                          >
                            Repeat Password
                          </label>
                        </div>
                      </div>
                      <div className="text-center py-4 mt-3">
                        <button
                          className="btn blue-gradient btn-rounded px-5 text-capitalize"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      <p className="text-uppercase font-small grey-text text-right d-flex justify-content-center mb-3 pt-2">
                        {' '}or Sign up with
                      </p>
                      <div className="row my-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-fb btn-rounded mr-md-3 z-depth-1a">
                          <img width="10" src="../assets/images/Icon/facebook.png" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-google btn-rounded ml-md-3 z-depth-1a"
                        >
                          <img
                            className="google"
                            width="20"
                            src="../assets/images/Icon/google.png"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

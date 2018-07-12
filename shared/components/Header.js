import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  toggleNavbar() {
    console.log('this.props.location.pathName', this.props.location);
    if (this.props.location.pathname == '/signup') {
      return (
        <nav>
          <div className="container">
            <a className="navbar-brand" href="#" target="_blank">
              <img src="../assets/images/logo-black.png" className="float-left" alt="placeholder" />
            </a>
          </div>
        </nav>
      );
    }
    return (
      <div className="header-image">
        <nav>
          <div className="container-fluid">
            <div className="container">
              <a className="navbar-brand" href="#" target="_blank">
                <img
                  src="../assets/images/logo-white.png"
                  className="float-left"
                  alt="placeholder"
                />
              </a>
            </div>
            <section className="mt-5 wow fadeIn">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center white-text mb-4">
                    Affiliate advertising using <br /> mattchnies learning
                  </h2>
                  <h6 className="text-center white-text mb-4">Who you are?</h6>
                  <div className="row my-3 d-flex justify-content-center">
                    <div className="col-sm-12 col-md-6 mb-4 text-md-right bussiness">
                      <NavLink to="/signup">
                        <button
                          type="button"
                          className="btn btn-transparent btn-rounded btn-border z-depth-1a"
                        >
                          <span className="mx-3">Bussiness</span>
                        </button>
                      </NavLink>
                      <p className="text-center py-4 white-text text-md-right">
                        I want to get published!
                      </p>
                    </div>
                    <div className="col-md-6 col-xs-12 mb-4 publisher">
                      <NavLink to="/signup">
                        <button
                          type="button"
                          className="btn btn-transparent btn-rounded btn-border z-depth-1a"
                        >
                          <span className="mx-3">Publisher</span>
                        </button>
                      </NavLink>
                      <p className="text-center py-4 white-text text-md-left">
                        (Blog, Website, Ecommerce)
                      </p>
                    </div>
                    <img
                      id="laptop"
                      className="mockups img-fluid float-left"
                      src="../assets/images/mockups.png"
                      alt="placeholder"
                    />
                    <img
                      id="cellphone"
                      className="mockups img-fluid float-left"
                      src="../assets/images/cell-mockups.png"
                      alt="placeholder"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </div>
    );
  }
  render() {
    const navbar = this.toggleNavbar();
    return (
      <div>
        {navbar}
      </div>
    );
  }
}

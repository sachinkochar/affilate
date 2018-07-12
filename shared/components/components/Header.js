import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GradButton from './common/GradButton'
import Paragraph from './common/Paragraph';
import Image from './common/Image';
export default class Header extends Component {
  toggleNavbar() {
    const {location} = this.props;
    console.log('this.props.location.pathName', location);
    if (location.pathname == '/') {
      return (
        <div className="header-image">
          <nav>
            <div className="container-fluid">
              <div className="container">
                <a className="navbar-brand" href="#" target="_blank">
                  <Image
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
                        <NavLink to="/signup?bussiness">
                          <GradButton className="btn btn-transparent btn-rounded btn-border z-depth-1a" text="Bussiness"/>
                        </NavLink>
                        <Paragraph className="text-center py-4 white-text text-md-right" text="I want to get published!" />
                      </div>
                      <div className="col-md-6 col-xs-12 mb-4 publisher">
                        <NavLink to="/signup?publisher">
                          <GradButton className="btn btn-transparent btn-rounded btn-border z-depth-1a" text="Publisher"/>
                        </NavLink>
                          (Blog, Website, Ecommerce)
                        <Paragraph className="text-center py-4 white-text text-md-right" text="I want to get published!" />
                      </div>
                      <Image
                        id="laptop"
                        className="mockups img-fluid float-left"
                        src="../assets/images/mockups.png"
                        alt="placeholder"
                      />
                      <Image
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
    }else if(location.pathname == '/sales' || location.pathname == '/notifications' || location.pathname == '/messages' || location.pathname == '/price-recom'){
      <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#" target="_blank">
              <Image src="img/logo-black.png" class="float-left" alt="placeholder" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="dark-blue-text">
                  <i className="fa fa-bars fa-1x"></i>
              </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
              <ul className="navbar-nav my-auto">
                  <li className="nav-item  p-2  mx-3 active">
                      <a className="nav-link" href="#">Home
                          <span className="sr-only">(current)</span>
                      </a>
                  </li>
                  <li className="nav-item p-2 mx-3">
                      <a className="nav-link" href="#" target="_blank">Notificaiton</a>
                  </li>
                  <li className="nav-item p-2 mx-3">
                      <a className="nav-link" href="#" target="_blank">Messages</a>
                  </li>
                  <li className="nav-item p-2 mx-3">
                      <a className="nav-link" href="#" target="_blank">Sales</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link btn blue-gradient btn-rounded" href="#"><span className="white-text px-4">Sign Out</span></a>
                  </li>
              </ul>
          </div>
        </div>
     </nav>
    }
    return (
      <nav>
        <div className="container">
          <a className="navbar-brand" href="#" target="_blank">
            <Image src="../assets/images/logo-black.png" className="float-left" alt="placeholder" />
          </a>
        </div>
      </nav>
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

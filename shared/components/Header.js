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
                <NavLink className="navbar-brand" to="/">
                  <Image
                    src="../assets/images/logo-white.png"
                    class="float-left"
                    alt="placeholder"
                  />
                </NavLink>
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
                          <GradButton class="btn btn-transparent btn-rounded btn-border z-depth-1a" text="Bussiness"/>
                        </NavLink>
                        <Paragraph class="text-center py-4 white-text text-md-right" text="I want to get published!" />
                      </div>
                      <div className="col-md-6 col-xs-12 mb-4 publisher">
                        <NavLink to="/signup?publisher">
                          <GradButton class="btn btn-transparent btn-rounded btn-border z-depth-1a" text="Publisher"/>
                        </NavLink>
                        <Paragraph class="text-center py-4 white-text text-md-left" text="(Blog, Website, Ecommerce)" />
                      </div>
                      <Image
                        id="laptop"
                        class="mockups img-fluid float-left"
                        src="../assets/images/mockups.png"
                        alt="placeholder"
                      />
                      <Image
                        id="cellphone"
                        class="mockups img-fluid float-left"
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
    }else if(location.pathname == '/sales' || location.pathname == '/notification' || location.pathname == '/messages' || location.pathname == '/price-recom'){
      return(
          <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                  <Image src="../assets/images/logo-black.png" class="float-left" alt="placeholder" />
              </NavLink>
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
                          <NavLink className="nav-link" to="/price-recom">Home
                              <span className="sr-only">(current)</span>
                          </NavLink>
                      </li>
                      <li className="nav-item p-2 mx-3">
                          <NavLink className="nav-link" to="/notification" >Notificaiton</NavLink>
                      </li>
                      <li className="nav-item p-2 mx-3">
                          <NavLink className="nav-link" to="/chat">Messages</NavLink>
                      </li>
                      <li className="nav-item p-2 mx-3">
                          <NavLink className="nav-link" to="/sales">Sales</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link btn blue-gradient btn-rounded" to="/"><span className="white-text px-4">Sign Out</span></NavLink>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
      )
    }
    return (
      <nav>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <Image src="../assets/images/logo-black.png" className="float-left" alt="placeholder" />
          </NavLink>
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

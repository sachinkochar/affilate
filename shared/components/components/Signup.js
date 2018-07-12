import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import GradButton from './common/GradButton';
import InputText from './common/InputText';
import Image from './common/Image';
import Paragraph from './common/Paragraph';
import Label from './common/Label';

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
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <InputText type="text" id="defaultFormCardNameEx" class="form-control" />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="First Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText type="text" id="defaultFormCardNameEx" class="form-control" />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Last Name" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <InputText type="text" id="defaultFormCardNameEx" class="form-control" />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="User Name" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <InputText type="password" id="defaultFormCardNameEx" class="form-control" />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Password" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText type="password" id="defaultFormCardNameEx" class="form-control" />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Repeat Password" />
                        </div>
                      </div>
                      <div className="text-center py-4 mt-3">
                        <NavLink to="/looking-for">
                          <GradButton class={"btn blue-gradient btn-rounded px-5 text-capitalize"} text={"Sign Up"} />
                        </NavLink>
                      </div>
                      <Paragraph class="text-uppercase font-small grey-text text-right d-flex justify-content-center mb-3 pt-2" text="{' '}or Sign up with"/>
                      <div className="row my-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-fb btn-rounded mr-md-3 z-depth-1a">
                          <Image width="10" src="../assets/images/Icon/facebook.png" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-google btn-rounded ml-md-3 z-depth-1a"
                        >
                          <Image
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

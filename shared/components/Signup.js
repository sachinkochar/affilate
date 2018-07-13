import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import GradButton from './common/GradButton';
import InputText from './common/InputText';
import Image from './common/Image';
import Paragraph from './common/Paragraph';
import Label from './common/Label';
import FacebookProvider, { Login } from 'react-facebook';
import GoogleLogin from 'react-google-login';
import {toast} from 'react-toastify';
import variables from '../../variables';
import { connect } from 'react-redux';
import {_actionSignup} from '../actions/signup'
const {fbId, googleId, emailReg} = variables.configFiles;

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      pass: '',
      repPass: '',
      valid: false
    }
  }
  _handleResponse (data) {
    console.log("success+++", data);
  }

  _handleError (error) {
    console.log("erroe", error)
    this.setState({ error });
  }

  _handleSignup(e){
    console.log('fname',fname, 'lname', lname, 'email', email, 'pass', pass, 'repPass', repPass )
    const {fname, lname, email, pass, repPass} = this.state;
    // console.log(fname || lname || email || pass || repPass);
    // e.preventDefault();
    if(fname!==undefined || lname!==undefined || email!==undefined || pass!==undefined || repPass!==undefined){
      if(emailReg.test(String(email).toLowerCase()) || pass.length>=8 || repPass.length>=8 || pass===repPass){
        let data = {
          fname, lname, email, password, repPass
        };
        this.props._signup(data)
        this.setState({valid: true})
      }else{
        toast.error('Please Fill All the fields!', { position: toast.POSITION.BOTTOM_CENTER });
        e.preventDefault();
      }
    }
  }

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
                          <InputText
                            name="fname"
                            type="text"
                            id="defaultFormCardNameEx"
                            class="form-control"
                            _setValue={(value) => this.setState({fname: value})}
                          />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="First Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="text"
                            id="defaultFormCardNameEx"
                            class="form-control"
                            name="lname"
                            _setValue={(value) => this.setState({lname: value})}
                          />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Last Name" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <InputText
                            type="email"
                            id="defaultFormCardNameEx"
                            class="form-control"
                            name="email"
                            _setValue={(value) => this.setState({email: value})}
                          />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Email" />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="password"
                            id="defaultFormCardNameEx"
                            class="form-control"
                            name="password"
                            _setValue={(value) => this.setState({pass: value})}
                          />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Password" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="password"
                            id="defaultFormCardNameEx"
                            class="form-control"
                            name="repPas"
                            _setValue={(value) => this.setState({repPass: value})}
                          />
                          <Label for="defaultFormCardNameEx" class="base-text font-weight-light mb-3" text="Repeat Password" />
                        </div>
                      </div>
                      <div className="text-center py-4 mt-3">
                        <NavLink to="/looking-for">
                          <GradButton click={this._handleSignup.bind(this)} class={"btn blue-gradient btn-rounded px-5 text-capitalize"} disabled={this.state.valid} text={"Sign Up"} />
                        </NavLink>
                      </div>
                      <Paragraph class="text-uppercase font-small grey-text text-right d-flex justify-content-center mb-3 pt-2" text="or Sign up with"/>
                      <div className="row my-3 d-flex justify-content-center">
                      <FacebookProvider appId={fbId}>
                          <Login
                            scope="email"
                            onResponse={this._handleResponse.bind(this)}
                            onError={this._handleError.bind(this)}
                          >
                            <button type="button" className="btn btn-fb btn-rounded mr-md-3 z-depth-1a">
                              <Image width="10" src="../assets/images/Icon/facebook.png" />
                            </button>
                          </Login>
                        </FacebookProvider>
                        <GoogleLogin
                          clientId={"googleId"}
                          onSuccess={this._handleResponse.bind(this)}
                          onFailure={this._handleError.bind(this)}
                          className="btn btn-google btn-rounded ml-md-3 z-depth-1a"
                        >
                          <Image
                            class="google"
                            width="20"
                            src="../assets/images/Icon/google.png"
                          />
                        </GoogleLogin>
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

};
function mapStateToProps(state) {
  const Signup = state;
  console.log("State", Signup);
  return { Signup };
}
function mapDispatchToProps(dispatch, props) {
  return {
    _signup: (data) => {
      dispatch(_actionSignup(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
      valid: false,
      err:'',
      msg:''
    }
  }
  _handleResponse (from, data) {
    console.log("success+++", from);
    const {first_name, last_name, email} = data.profile;
    const userDetails = {
      firstName: first_name,
      lastName: last_name,
      userName: email,
      from,
      role: this.props.location.search.substr(1)
    }
    this.props._signup(userDetails);
  }

  _handleError (error) {
    console.log("erroe", error)
    this.setState({ error });
  }

  _handleSignup(e){
    const {fname, lname, email, pass, repPass} = this.state;
    console.log('fname',fname, 'lname', lname, 'email', email, 'pass', pass, 'repPass', repPass, "id", e.target )
    if(fname==='' || lname === '' || email === '' || pass === '' || repPass === ''){
      if(fname===undefined || fname === ""){
        document.getElementById("fname").classList.add("validate");
        this.setState({err: "fname", msg: "Please Fill First name*"})
      }else{
        document.getElementById("fname").classList.remove("validate");
      }
      if(lname===undefined || lname === ""){
        document.getElementById("lname").classList.add("validate");
        this.setState({err: "lname", msg: "Please Fill Last name*"})
      }else{
        document.getElementById("lname").classList.remove("validate");
      }
      if(email === undefined || email === "" || !emailReg.test(String(email).toLowerCase())){
        document.getElementById("email").classList.add("validate");
        this.setState({err: "email", msg: "Email Should Not be empty and in the format 'user@affiliate.com'*"})
      }else{
        document.getElementById("email").classList.remove("validate");
      }
      if(pass===undefined || pass === '' || repPass === undefined || repPass === ''){
        if(pass.length>8 || pass !== repPass){
          document.getElementById('pass').classList.add("validate")
          document.getElementById('repPass').classList.add("validate")
          this.setState({err: "pass", msg: "Password must contain 8 Characters*"})
        }else{
          document.getElementById('pass').classList.add("validate")
          document.getElementById('repPass').classList.add("validate")
        }
      }else{
        document.getElementById('repPass').classList.remove("validate")
      }
    }else{
      document.getElementById("fname").classList.remove("validate");
      document.getElementById("lname").classList.remove("validate");
      document.getElementById("email").classList.remove("validate");
      document.getElementById("pass").classList.remove("validate");
      document.getElementById("repPass").classList.remove("validate");
      this.setState({err: '', msg: ''});
      let formData = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: pass,
        repeatPassword: repPass,
        role: this.props.location.search.substr(1)
      }
      this.props._signup(formData)
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      const {fetchSignup} = nextProps
      if(fetchSignup){
        if(fetchSignup.success){
          console.log("nextProps", nextProps)
          nextProps.history.push('/looking-for')
        }else if(fetchSignup.error){
          toast.error("done", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    }
  }

  render() {
    const {err, msg} = this.state;
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
                            id="fname"
                            class="form-control"
                            _setValue={(value) => this.setState({fname: value})}
                          />
                          <Label
                            for="defaultFormCardNameEx"
                            class="base-text font-weight-light mb-3"
                            text="First Name"
                            err={err==="fname" ? {err, msg} : ""}
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="text"
                            id="lname"
                            class="form-control"
                            name="lname"
                            _setValue={(value) => this.setState({lname: value})}
                          />
                          <Label
                            for="defaultFormCardNameEx"
                            class="base-text font-weight-light mb-3"
                            text="Last Name"
                            err={err==="lname" ? {err, msg} : ""}
                          />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <InputText
                            type="email"
                            id="email"
                            class="form-control"
                            name="email"
                            _setValue={(value) => this.setState({email: value})}
                          />
                          <Label
                            for="defaultFormCardNameEx"
                            class="base-text font-weight-light mb-3"
                            text="Email"
                            err={err==="email" ? {err, msg} : ""}
                          />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="password"
                            id="pass"
                            class="form-control"
                            name="password"
                            _setValue={(value) => this.setState({pass: value})}
                          />
                          <Label
                            for="defaultFormCardNameEx"
                            class="base-text font-weight-light mb-3"
                            text="Password"
                            err={err==="pass" ? {err, msg} : ""}
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <InputText
                            type="password"
                            id="repPass"
                            class="form-control"
                            name="repPas"
                            _setValue={(value) => this.setState({repPass: value})}
                          />
                          <Label
                            for="defaultFormCardNameEx"
                            class="base-text font-weight-light mb-3"
                            text="Repeat Password"
                            err={err==="pass" ? {err, msg} : ""}
                          />
                        </div>
                      </div>
                      <div className="text-center py-4 mt-3">
                        {/* <NavLink to="/looking-for"> */}
                        <GradButton click={this._handleSignup.bind(this)} class={"btn blue-gradient btn-rounded px-5 text-capitalize"} disabled={this.state.valid} text={"Sign Up"} />
                        {/* </NavLink> */}
                      </div>
                      <Paragraph class="text-uppercase font-small grey-text text-right d-flex justify-content-center mb-3 pt-2" text="or Sign up with"/>
                      <div className="row my-3 d-flex justify-content-center">
                      <FacebookProvider appId={fbId}>
                          <Login
                            scope="email"
                            onResponse={this._handleResponse.bind(this, "fb")}
                            onError={this._handleError.bind(this)}
                          >
                            <button type="button" className="btn btn-fb btn-rounded mr-md-3 z-depth-1a">
                              <Image width="10" src="../assets/images/Icon/facebook.png" />
                            </button>
                          </Login>
                        </FacebookProvider>
                        <GoogleLogin
                          clientId={googleId}
                          onSuccess={this._handleResponse.bind(this, "google")}
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
  const {fetchSignup} = Signup;
  console.log('fetch', fetchSignup)
  return { Signup, fetchSignup };
}
function mapDispatchToProps(dispatch, props) {
  return {
    _signup: (data) => {
      console.log("form", data)
      dispatch(_actionSignup(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

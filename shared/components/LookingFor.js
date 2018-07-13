import React, { Component } from 'react'
import GradButton from './common/GradButton';
import Paragraph from './common/Paragraph';
import {NavLink} from 'react-router-dom';

export default class LookingFor extends Component {
  render() {
    return (
      <div>
         <main>
            <div className="container">
                <section className="mt-5 wow fadeIn">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card mx-xl-5">
                                <div className="card-body">
                                    <h4 className="text-center base-text py-4 mt-5">Are you looking for</h4>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-4 text-md-right bussiness">
                                            <NavLink to="online-bussiness">
                                                <GradButton {...this.props} class={"btn blue-gradient btn-rounded text-capitalize"} text={"Online Bussiness"}/>
                                            </NavLink>
                                        </div>
                                        <div className="col-md-6 col-xs-12 mb-4 publisher">
                                            <NavLink to="offline-bussiness">
                                                <GradButton {...this.props} class={"btn blue-gradient btn-rounded text-capitalize"} text={"Offline Bussiness"}/>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <h4 className="text-uppercase grey-text text-right d-flex justify-content-center mb-3 pt-2">or</h4>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <NavLink to="both-bussiness">
                                            <GradButton {...this.props} class={"btn blue-gradient btn-rounded text-capitalize"} text={"Both Bussiness"}/>
                                        </NavLink>
                                    </div>
                                    <Paragraph class="text-center grey-text mb-5" text="(Online & Offline)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
      </div>
    )
  }
}

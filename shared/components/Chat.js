import React, { Component } from 'react'
import Image from './common/Image';
import Paragraph from './common/Paragraph';
import TextArea from './common/TextArea';
import GradButton from './common/GradButton';

export default class Chat extends Component {
  render() {
    return (
        <main>
            <div className="container ">
                <section className="mt-5 pt-5">
                    <h4 className="text-center fixed-top font-weight-bold white py-4 color-primary mb-4">John Doe</h4>
                    <div className="row">
                        <div className="col-md-10 col-xl-10 offset-md-1 offset-xl-1 pl-md-3 px-lg-auto px-5 members-panel-1 scrollbar-light-blue">
                            <ul className="list-unstyled chat">
                                <li className="justify-content-between mb-4">
                                    <div className="row">
                                        <div className="col-md-1 align-bottom display-1 chat-head">
                                            <Image src="../assets/images/chat-1.png" width="50" alt="avatar" class="avatar chat-head-image rounded-circle ml-2 z-depth-1"/>
                                        </div>
                                        <div className="col-md-7 chat-box chat-body white p-3 ml-2">
                                            <div className="header">
                                                <strong className="primary-font">Abraham Doe</strong>
                                                <small className="pull-right text-muted">10:41 pm</small>
                                            </div>
                                            <Paragraph class="mb-0" text="Get Offers or Request offers from the business also get complete Product analysis that is" />
                                        </div>
                                    </div>
                                </li>
                                <li className="justify-content-between mb-4">
                                    <div className="row mr-3">
                                        <div className="col-md-4">
                                        </div>
                                        <div className="col-md-7 chat-box-gradient chat-body white p-3">
                                            <div className="header">
                                                <strong className="primary-font">John Doe</strong>
                                                <small className="white-text pull-right text-muted">10:41 pm</small>
                                            </div>
                                            <Paragraph className="mb-0" text="Get Offers or Request offers from the business also get complete Product analysis that is"/>
                                        </div>
                                        <div className="col-md-1 align-bottom display-1 chat-head">
                                            <Image src="../assets/images/chat-2.png" width="50" alt="avatar" class="avatar chat-head-image rounded-circle mr-2 ml-0 z-depth-1"/>
                                        </div>
                                    </div>
                                </li>
                                <li className="justify-content-between mb-4">
                                    <div className="row">
                                        <div className="col-md-1 align-bottom display-1 chat-head">
                                        </div>
                                        <div className="col-md-7 chat-box chat-body white p-3 ml-2">
                                            <div className="header">
                                                <strong className="primary-font">Abraham Doe</strong>
                                                <small className="pull-right text-muted">10:42 pm</small>
                                            </div>
                                            <p className="mb-0">
                                                <Image class="p-2" src="../assets/images/C1.png" />
                                                <Image class="p-2" src="../assets/images/C2.png" />
                                                <Image class="p-2" src="../assets/images/C3.png" />
                                                <Image class="p-2" src="../assets/images/C4.png" />
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="justify-content-between mb-4">
                                    <div className="row">
                                        <div className="col-md-1 chat-head">
                                            <Image  src="../assets/images/chat-1.png" width="50" alt="avatar" class="avatar chat-head-image rounded-circle ml-2 z-depth-1"/>
                                        </div>
                                        <div className="col-md-1 chat-box chat-body white p-3 ml-2">
                                            <Image src="../assets/images/typing.png"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="white">
                                <hr className="w-100" />
                                <div className="row form-group basic-textarea">
                                    <div className="col-md-1">
                                        <Image src="../assets/images/chat-2.png" width="36" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"/>
                                    </div>
                                    <div className="col-md-9">
                                        <TextArea class="form-control border-0 pl-2 my-0" id="exampleFormControlTextarea2" rows="1" placeholder="Write something..."/>
                                    </div>
                                    <div className="col-md-2">
                                        <GradButton class="btn btn-sm blue-gradient btn-rounded text-capitalize float-right mr-lg-2" type="button" text="Send"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
  }
}

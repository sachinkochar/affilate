import React, { Component } from 'react'
import Image from './common/Image';
import Paragraph from './common/Paragraph';
import TextArea from './common/TextArea';
import GradButton from './common/GradButton';
import io from "socket.io-client";

export default class Chat extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            roomId:''
        };

        this.socket = io('localhost:3000');
        // var socket= this.socket;
        this.socket.on('connect', function(){
           console.log('connected123');
        //    this.socket.emit('CREATE_ROOM',{
        //        User1:'5b4f2982bdd41a242a40c16a',
        //        User2:'5b4f29ffbdd41a242a40c16c'
        //    });
          });
        this.socket.on('RECEIVE_MESSAGE', function(data){
            console.log(data,'recieved data')
            addMessage(data);
        });

        this.socket.on('ROOM_CREATED', function(data){
            console.log(data,'room created');
            // this.setState({roomId:data._id})
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages:  data});
            console.log(this.state.messages);
        };

        this.sendMessage = (e) => {
            e.preventDefault();
            console.log(this.state.message,'state message')
            this.socket.emit('SEND_MESSAGE', {
                // author: this.state.username,
                message: this.state.message,
                roomId:'5b57543e7771246d9d464144',
                user:"5b4f2a9bbdd41a242a40c16d"
            })

        }
    }

  render() {
    return (
        <main>
            <div className="container ">
                <section className="mt-5 pt-5">
                    <h4 className="text-center fixed-top font-weight-bold white py-4 color-primary mb-4">John Doe</h4>
                    <div className="row">
                        <div className="col-md-10 col-xl-10 offset-md-1 offset-xl-1 pl-md-3 px-lg-auto px-5 members-panel-1 scrollbar-light-blue">
                            <ul className="list-unstyled chat">
                                {/* <li className="justify-content-between mb-4">
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
                                </li> */}
                                {this.state.messages.length >0  && (
                                    this.state.messages.map((msg,i) => {
                                        console.log(this.state.messages,'messages')
                                        return(
                                            
                                            <li className="justify-content-between mb-4" key={i}>
                                                {msg.member === '5b4f2a9bbdd41a242a40c16d' && (
                                                    <div className="row mr-3">
                                                        <div className="col-md-4">
                                                        </div>
                                                        <div className="col-md-7 chat-box-gradient chat-body white p-3">
                                                            <div className="header">
                                                                <strong className="primary-font">John Doe</strong>
                                                                <small className="white-text pull-right text-muted">10:41 pm</small>
                                                            </div>
                                                            <p className="mb-0" >{msg.message}</p>
                                                        </div>
                                                        <div className="col-md-1 align-bottom display-1 chat-head">
                                                            <Image src="../assets/images/chat-2.png" width="50" alt="avatar" class="avatar chat-head-image rounded-circle mr-2 ml-0 z-depth-1"/>
                                                        </div>
                                                    </div>
                                                )}
                                                {msg.member !== '5b4f2a9bbdd41a242a40c16d' && (

                                                <li className="justify-content-between mb-4">
                                                    <div className="row">
                                                        <div className="col-md-1 align-bottom display-1 chat-head">
                                                        </div>
                                                        <div className="col-md-7 chat-box chat-body white p-3 ml-2">
                                                            <div className="header">
                                                                <strong className="primary-font">Abraham Doe</strong>
                                                                <small className="pull-right text-muted">10:42 pm</small>
                                                            </div>
                                                            <p className="mb-0" >{msg.message}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                )}
                                                </li>
                                        )
                                    })
                                )}
                                {/* <li className="justify-content-between mb-4">
                                    <div className="row">
                                        <div className="col-md-1 chat-head">
                                            <Image  src="../assets/images/chat-1.png" width="50" alt="avatar" class="avatar chat-head-image rounded-circle ml-2 z-depth-1"/>
                                        </div>
                                        <div className="col-md-1 chat-box chat-body white p-3 ml-2">
                                            <Image src="../assets/images/typing.png"/>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                            <div className="white">
                                <hr className="w-100" />
                                <div className="row form-group basic-textarea">
                                    <div className="col-md-1">
                                        <Image src="../assets/images/chat-2.png" width="36" alt="avatar" class="avatar rounded-circle mr-2 ml-lg-3 ml-0 z-depth-1"/>
                                    </div>
                                    <div className="col-md-9">
                                        <TextArea class="form-control border-0 pl-2 my-0" message={this.state.message} change={(e) => this.setState({message: e.target.value})} id="exampleFormControlTextarea2" rows="1" placeholder="Write something..."/>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-sm blue-gradient btn-rounded text-capitalize float-right mr-lg-2" onClick={(e)=> {this.sendMessage(e);} } type="button" >Send</button>
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

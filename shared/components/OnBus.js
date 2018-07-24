import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InputText from './common/InputText';
import Label from './common/Label';
import GradButton from './common/GradButton';
import Select from './common/Select';
import TextArea from './common/TextArea';

export default class OnBus extends Component {
    constructor(props){
        super(props);
        this.state={
            buis_name:'',
            buis_website:'',
            buis_type:'',
            description:''
        }
    }

  render() {
    let opt = [
        {
            class: "grey-text",
            value: "Choose Your Option",
            disabled: true,
            selected: true,
            text: "Choose Your Option"
        },
        {
            class: "",
            value: "1",
            disabled: false,
            selected: false,
            text: "Option1"
        },
        {
            class: "",
            value: "2",
            disabled: false,
            selected: false,
            text: "Option2"
        }
    ]
    return (
        <main>
            <div className="container">
                <section className="mt-3 wow fadeIn">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h2 className="text-center base-text py-4 mb-4">Online Business</h2>
                            <div className="card mx-xl-5">
                                <div className="card-body mt-5">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <InputText type="text" id="defaultFormCardNameEx" class="form-control" name="buis_name" _setValue={(value) => this.setState({buis_name: value})} />
                                                <Label for="defaultFormCardNameEx" class="base-text font-weight-light" text="Business name"/>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <Select selectClass="form-control" opt={opt} name="buis_type" />
                                                <Label class="base-text font-weight-light" text="Business Type" />
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <InputText type="text" id="defaultFormCardNameEx" class="form-control" name="buis_website" _setValue={(value) => this.setState({buis_website: value})} />
                                                <Label for="defaultFormCardNameEx" class="base-text font-weight-light" text="Business Website"/>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <TextArea class="form-control md-textarea" id="defaultFormCardNameEx" rows="5" name="description" _setValue={(value) => this.setState({description: value})} />
                                                <Label for="defaultFormCardNameEx" class="base-text label-textarea font-weight-light" text="Description (Optional)"/>
                                                <div className="text-center py-3">
                                                    <NavLink to="/price-recom">
                                                        <GradButton class="btn blue-gradient btn-rounded text-capitalize px-5" type="submit" text="Submit"/>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

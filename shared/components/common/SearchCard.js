import React, { Component } from 'react'

class SearchCard extends Component {
constructor(props){
    super(props);
}
  render() {       
    return(

            <div className="card rounded mb-4">
                <div className="row card-body mx-5 mb-4">
                    <div className="col-md-5 offset-md-1 align-middle">
                        <h5 className="mt-3 mb-3">{ this.props.title } </h5>
                        <p>Credibility - { this.props.credibility } <br/> User Trust - { this.props.user_trust } <br/> Brand value - { this.props.brand_value } </p>
                        <p className="color-primary">Expected Profit - { this.props.expected_profit }</p>
                    </div>
                    <div className="col-md-5 offset-md-1 align-middle">
                        <h5 className="mt-3 mb-3">Blog Sub.- { this.props.subject } </h5>
                        <p>Price - { this.props.price }<br/> Request for { this.props.request_for }</p>
                        <p className="color-primary">Expected Sales - { this.props.expected_sales }</p>
                        <a className="btn-request page-link" mdbWavesEffect>Request</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchCard

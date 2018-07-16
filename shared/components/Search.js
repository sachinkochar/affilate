import React, { Component } from 'react'
import Image from './common/Image';
import GradButton from './common/GradButton';
import { connect } from 'react-redux';
import { _searchAction } from '../actions/search'


class Search extends Component {
constructor(props){
    super(props);
}
componentDidMount(){
    this.props._search();
    console.log(this.props)
}
componentWillReceiveProps(props,nextProps){
    console.log(props,'props')
    console.log(nextProps,'nextProps')
}


  render() {
      console.log(this.props,'props in render')
    return (
        <main>
            <div className="container ">
                <section className="mt-5 wow fadeIn pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center base-text py-4 mb-0">Find Publishers</h2>
                            <h5 className="text-center base-text mb-5">Blog , Website , E - Commerce Store</h5>
                            <div className="row">
                                <div className="col-md-8 offset-md-2 form-inline py-0 px-0 search-inbox search-big-btn">
                                    <Image class="ml-3" width="30" src="../assets/images/Icon/search.png" />
                                    <input className="form-control search-box" type="text " placeholder="Search" name="search_text" aria-label="Search"  mdbInputDirective/>
                                    <span className="tags">Tesla<Image class="ml-2" src="../assets/images/Icon/close.png"/></span>
                                    <span className="tags">Blog<Image class="ml-2" src="../assets/images/Icon/close.png"/></span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8 offset-md-2 form-inline py-0 px-0 pt-3 pb-5">
                                    <a className="btn-tags page-link" mdbWavesEffect>Blog</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>Website</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>E-commerce</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>Blog</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>blog</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>Website</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>Website</a>
                                    <a className="btn-tags page-link" mdbWavesEffect>E-commerce</a>
                                </div>
                            </div>
                            {this.props.Search_data.search.search_data.length && (

                                this.props.Search_data.search.search_data.map((details,i)=>{
                                console.log(details)
                                return(

                                    <div className="card rounded mb-4">
                                        <div className="row card-body mx-5 mb-4">
                                            <div className="col-md-5 offset-md-1 align-middle">
                                                <h5 className="mt-3 mb-3">{ details.title } </h5>
                                                <p>Credibility - { details.credibility } <br/> User Trust - { details.user_trust } <br/> Brand value - { details.brand_value } </p>
                                                <p className="color-primary">Expected Profit - { details.expected_profit }</p>
                                            </div>
                                            <div className="col-md-5 offset-md-1 align-middle">
                                                <h5 className="mt-3 mb-3">Blog Sub.- { details.subject } </h5>
                                                <p>Price - { details.price }<br/> Request for { details.request_for }</p>
                                                <p className="color-primary">Expected Sales - { details.expected_sales }</p>
                                                <a className="btn-request page-link" mdbWavesEffect>Request</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            )}

                    
                            <div className="row">
                                <div className="col-md-4 mt-2">
                                    <h5 className="font-weight-bold">Showing <strong>0-5 out of 24</strong></h5>
                                </div>
                                <div className="col-md-8">
                                    <nav className="float-right">
                                        <ul className="pagination pagination-circle pg-blue mb-0">

                                            <li className="page-item disabled"><a className="btn-previous page-link" mdbWavesEffect>Previous</a></li>

                                            <li className="page-item disabled">
                                                <a className="page-link" mdbWavesEffect aria-label="Previous">
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="pagination-items page-link" mdbWavesEffect>1</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>2</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>3</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>4</a></li>
                                            <li className="page-item"><a className="pagination-items page-link" mdbWavesEffect>5</a></li>

                                            <li className="page-item">
                                                <a className="page-link" mdbWavesEffect aria-label="Next">
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="btn-next page-link">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center py-4 mt-3">
                    <GradButton class="btn blue-gradient btn-rounded px-5" type="submit" text="Skip"/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </main>
    )
  }
}

function mapStateToProps(state) {
    const Search_data = state;
    console.log("State", Search_data);
    return { Search_data };
  }
  function mapDispatchToProps(dispatch, props) {
    return {
      _search: () => {
        dispatch(_searchAction());
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)

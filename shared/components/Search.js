import React, { Component } from 'react'
import Image from './common/Image';
import GradButton from './common/GradButton';
import { connect } from 'react-redux';
import { _searchAction, _searchFilterAction } from '../actions/search'
import { _tagsAction } from '../actions/tags'
import SearchCard from './common/SearchCard'

class Search extends Component {
constructor(props){
    super(props);
    this.state={
        tags:[]
    }
    this.handleClick= this.handleClick.bind(this)
    this.handleTagDelete= this.handleTagDelete.bind(this)
}
componentDidMount(){
    this.props._search();
    this.props._tags();
}
componentWillReceiveProps(props,nextProps){
    console.log(props,'props');
    console.log(nextProps,'nextProps');
}

handleClick(tag) {
    console.log(tag)
    var tags = this.state.tags;
    if(tags.indexOf(tag) < 0){
        tags.push(tag);
        this.props._filter(tags)
    }
}

handleTagDelete(tag) {
    console.log(tag)
    var tags = this.state.tags;
    var tag_index= tags.indexOf(tag)
    tags.splice(tag_index,1)
    this.setState({ tags:tags })
    if(tags.length > 0){
        this.props._filter(tags)
    }else{
        this.props._search()
    }
}

  render() {
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
                                    {/* <input className="form-control search-box" type="text " placeholder="Search" name="search_text" aria-label="Search"  mdbInputDirective/> */}
                                    { this.state.tags.map( (tag,i) => {
                                        return(
                                            <span className="tags" key={ i } onClick={ this.handleTagDelete.bind(this,tag) }>{ tag }<Image class="ml-2" src="../assets/images/Icon/close.png" /></span>
                                        )
                                    } ) }
                                    {/* <span><a className="btn-tags page-link" mdbWavesEffect>Blog</a><Image class="ml-2" src="../assets/images/Icon/close.png"/></span> */}
                                    {/* <span><a className="btn-tags page-link" mdbWavesEffect>Insurance</a></span> */}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8 offset-md-2 form-inline py-0 px-0 pt-3 pb-5">
                                {this.props.Search_data.tags.tags_data.length > 0 && (
                                    this.props.Search_data.tags.tags_data.map( ( tag,i ) => {
                                        return (
                                            <a className="btn-tags page-link" key={i} onClick={ this.handleClick.bind(this,tag) }  mdbWavesEffect>{ tag }</a>
                                        )
                                    } )
                                )}
                                </div>
                            </div>
                            {Array.isArray(this.props.Search_data.search.search_data) === true &&this.props.Search_data.search.search_data.length > 0 && (

                                this.props.Search_data.search.search_data.map(( details,i )=>{
                                    return(
                                    <SearchCard 
                                        key={ i }
                                        title={ details.title }
                                        credibility={ details.credibility }
                                        user_trust={ details.user_trust }
                                        brand_value={ details.brand_value }
                                        expected_profit={ details.expected_profit }
                                        expected_sales={ details.expected_sales }
                                        subject={ details.subject }
                                        price={ details.price }
                                        request_for={ details.request_for }
                                    />
                                )
                            })
                            )}
                            {this.props.Search_data.search.search_data === "loading" &&
                             (
                                <div className="text-center">Loading....</div>
                            )
                            }
                    
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
      },
      _tags: () => {
        dispatch(_tagsAction())
      },
      _filter: (tags) => {
        dispatch(_searchFilterAction(tags))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)

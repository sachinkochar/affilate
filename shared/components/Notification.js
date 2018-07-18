import React, { Component } from 'react'
import GradButton from './common/GradButton';
import Image from './common/Image';
import Paragraph from './common/Paragraph';

export default class Notification extends Component {
  render() {
    return (
        <main>
            <div className="container ">
                <section className="mt-5 wow fadeIn pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center base-text py-4 mb-4">Messages</h2>
                            <div className="row">
                                <div className="col-md-2 pt-4">
                                    <h5 className="text-center base-text font-weight-bold py-4 mb-4">Inbox (3)
                                    <img width="15" src="../assets/images/Icon/down-arrow.png"/></h5>
                                </div>
                                <div className="col-md-3 offset-md-4 form-inline py-0 px-0 search-inbox">
                                    <img className="search-btn" width="20" src="../assets/images/Icon/search.png"/><input className="form-control search-box" type="text " placeholder="Search " aria-label="Search " mdbInputDirective />
                                </div>
                                <div className="col-md-3 pt-4 text-center">
                                    <GradButton text="+   New Message" class="btn blue-gradient btn-rounded text-capitalize" type="submit" />
                                </div>
                            </div>
                            <div className="row">
                                <table className="table table-striped table-hover mx-5">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="align-middle"> <Image width="75" src="../assets/images/inbox-head.png"/></th>
                                            <td className="align-middle">
                                                <h5 className="mt-3">Robbie T Andrew S.</h5>
                                                <Paragraph text="Renters, 50 Bond St."/>
                                            </td>
                                            <td className="align-middle">
                                                <h5 className="font-weight-bold mt-3">We need the lease documents</h5>
                                                <Paragraph text="Hi there justin, we would like to get our lease documents..."/>
                                            </td>
                                            <td className="align-middle">20 min ago</td>
                                            <td className="align-middle">
                                                <Paragraph class="notification" text="4"/>
                                            </td>
                                            <td className="align-middle"><Image width="35" src="../assets/images/Icon/more-options.png"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="align-middle"> <Image width="75" src="../assets/images/inbox-head.png"/></th>
                                            <td className="align-middle">
                                                <h5 className="mt-3">Robbie T Andrew S.</h5>
                                                <Paragraph text="Renters, 50 Bond St."/>
                                            </td>
                                            <td className="align-middle">
                                                <h5 className="font-weight-bold mt-3">We need the lease documents</h5>
                                                <Paragraph text="Hi there justin, we would like to get our lease documents..."/>
                                            </td>
                                            <td className="align-middle">20 min ago</td>
                                            <td className="align-middle">
                                                <Paragraph class="notification" text="4"/>
                                            </td>
                                            <td className="align-middle"><Image width="35" src="../assets/images/Icon/more-options.png"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

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
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </main>
    )
  }
}

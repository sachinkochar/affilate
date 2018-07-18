import React, { Component } from 'react';

export default class Middle extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <section className="text-center my-5">
            <h5 className="text-center py-2 color-primary">Our Process</h5>
            <h3 className="mb-5">
              Check out how your organisation stacks<br />up against competitors
            </h3>
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-lg-0 mb-4">
                <div className="card rounded testimonial-card">
                  <div className="card-up info-color" />
                  <div className="avatar mx-auto white">
                    <img
                      src="../assets/images/Icon/time.png"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body mb-4">
                    <h4 className="mb-4">30 Days Period Crap</h4>
                    <p className="dark-grey-text mt-4">
                      Get Paid Even after 90 Days. If you’re<br /> the source then you remain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-md-0 mb-4">
                <div className="card rounded testimonial-card">
                  <div className="card-up blue-gradient" />
                  <div className="avatar mx-auto white">
                    <img
                      src="../assets/images/Icon/network.png"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body mb-4">
                    <h4 className="mb-4">Get Easy Links</h4>
                    <p className="dark-grey-text mt-4">
                      Get links to put on your blogs<br /> as soon as you register
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card rounded testimonial-card">
                  <div className="card-up indigo" />
                  <div className="avatar mx-auto white">
                    <img
                      src="../assets/images/Icon/db.png"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-body mb-4">
                    <h4 className="mb-4">Get Competitive Analysis</h4>
                    <p className="dark-grey-text mt-4">
                      Know the source of every Purchase.<br /> Get detailed Analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid wave">
          <section className="mt-5 wow fadeIn">
            <div className="row pt-5">
              <div className="col-md-7 mb-4 px-0">
                <img src="../assets/images/home/1.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-4 my-auto">
                <h3 className="h3 mb-3">
                  For Publishers -<br /> Blogs, Websites, <br /> E-commerce Stores
                </h3>
                <p>
                  Get Offers or Request offers from the business also get complete <br />Product
                  analysis that is Product’s Credibility , User Trust , Brand value , Reviews and
                  more. <br />
                  <br />So that you can decide which products to publish wisely
                </p>
                <div className="text-left py-4 mt-3">
                  <button className="btn blue-gradient btn-rounded ml-0 px-5 text-capitalize">
                    Get Offer
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className="mt-5 wow fadeIn">
            <div className="row">
              <div className="col-md-4 offset-md-1 my-auto">
                <h3 className="h3 mb-3">
                  For Business-<br /> Online , Offline
                </h3>
                <p>
                  Get Offers or Request offers from the business also get complete <br />Product
                  analysis that is Product’s Credibility , User Trust , Brand value , Reviews and
                  more. <br />
                  <br />So that you can decide which products to publish wisely
                </p>
                <div className="text-left py-4 mt-3">
                  <button className="btn blue-gradient btn-rounded ml-0 px-5 text-capitalize">
                    Get Offer
                  </button>
                </div>
              </div>
              <div className="col-md-7 mb-4 px-0">
                <img src="../assets/images/home/2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid wave">
          <section className="mt-5 wow fadeIn">
            <div className="row">
              <div className="col-md-7 mb-4 px-0">
                <img src="../assets/images/home/3.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-4 my-auto">
                <h3 className="h3 mb-3">
                  Get Recommendation<br /> and potential earnings<br /> for product{' '}
                </h3>
                <p>
                  Publishers can Get recommended products and see <br />expected earnings through
                  that product . In the similar way <br />Businesses Can get recommended websites
                  and see <br />expected earnings.
                </p>
                <div className="text-left py-4 mt-3">
                  <button className="btn blue-gradient btn-rounded ml-0 px-5 text-capitalize">
                    Get Offer
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className="mt-5 wow fadeIn">
            <div className="row">
              <div className="col-md-4 offset-md-1 my-auto">
                <h3 className="h3 mb-3">
                  Get the complete<br /> competitive Analysis
                </h3>
                <p>
                  Find the source behind very single sale whether your <br />business is online or
                  offline And get ways to improve your<br />sale.
                </p>
                <div className="text-left py-4 mt-3">
                  <button className="btn blue-gradient btn-rounded ml-0 px-5 text-capitalize">
                    Get Offer
                  </button>
                </div>
              </div>
              <div className="col-md-7 mb-4 px-0">
                <img src="../assets/images/home/4.png" className="img-fluid" alt="" />
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

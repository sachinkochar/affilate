import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
import Content from './Content';
import config from '../../config';
import Main from './Main';

export default class App extends Component {

  render() {
    return (
      <div id="row">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="application-name" content={config('htmlPage.defaultTitle')} />
          <meta name="description" content={config('htmlPage.description')} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#2b2b2b" />
          <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
          <meta name="theme-color" content="#2b2b2b" />
          <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="../assets/css/main.css" rel="stylesheet" />
          <link href="../assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700"
            rel="stylesheet"
          />
          <title>
            {config('htmlPage.defaultTitle')}{' '}
          </title>
        </Helmet>
        <div className="container content no_padding">
          <div className="col-xs-12 no_padding">
            <div className="row no_margin">
              <Switch>
                <Main>
                  <Route
                    exact
                    path="/"
                    render={props =>(<Content {...props}/>)}
                  />
                </Main>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
import Content from './Content';
import config from '../../config';
import Main from './Main';
import Signup from './Signup';
import LookingFor from './LookingFor';
import BothBus from './BothBus';
import OnBus from './OnBus';
import OffBus from './OffBus';
import PriceComp from './PriceComp';
import Notification from './Notification';
import Chat from './Chat';
import Search from './Search';

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
          <link href="../assets/css/bootstrap.css" rel="stylesheet" />
          <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="../assets/css/mdb.css" rel="stylesheet" />
          <link href="../assets/css/mdb.min.css" rel="stylesheet" />
          <link href="../assets/css/main.css" rel="stylesheet" />
          <link href="../assets/css/style.min.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Muli:400,600" rel="stylesheet" />
          {/* <script src="https://code.jquery.com/jquery-3.3.1.js" /> */}
          <script src="../assets/js/bootstrap.js" />
          <script src="../assets/js/mdb.min.js" />
          <script src="../assets/js/popper.min.js" />
          <script type="text/javascript ">
              new WOW().init();
          </script>
          <title>
            {config('htmlPage.defaultTitle')}{' '}
          </title>
        </Helmet>
        <Switch>
          <Route exact path="/chat" render={props => <Chat {...props} />} />
          <Main>
            <Route exact path="/" render={props => <Content {...props} />} />
            <Route path="/signup" render={props => <Signup {...props} />} />
            <Route path="/looking-for" render={props => <LookingFor {...props} />} />
            <Route path="/online-bussiness" render={props => <OnBus {...props} />} />
            <Route path="/offline-bussiness" render={props => <OffBus {...props} />} />
            <Route path="/both-bussiness" render={props => <BothBus {...props} />} />
            <Route path="/price-recom" render={props => <PriceComp {...props} />} />
            <Route path="/notification" render={props => <Notification {...props} />} />
            <Route path="/search" render={props => <Search {...props} />} />
          </Main>
        </Switch>
      </div>
    );
  }
}

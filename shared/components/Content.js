// Component containing all the components rendering,
// of all child Routes.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Middle from './Middle';

class Content extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Middle />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data = state;
  return { data };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);

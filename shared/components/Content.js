// Component containing all the components rendering,
// of all child Routes.

import React, { Component } from 'react';
import { connect } from 'react-redux';
class Content extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="row no_margin">
          hello
        </div>
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

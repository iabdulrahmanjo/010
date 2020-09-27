import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class JourneyRoad extends Component {
  render() {
    return <div>Hello {this.props.match.params.product}</div>;
  }
}

export default withRouter(JourneyRoad);

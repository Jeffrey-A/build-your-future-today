import React from "react";

import Nav from "./Nav";

class RoadMap extends React.Component {
  render() {
    return (
      <div>
        <Nav logout={this.props.logout} />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default RoadMap;

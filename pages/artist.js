import React, { Component } from "react";

class Artist extends Component {
  render() {
    const { name, coords } = this.props;

    return (
      <div
        className="artist"
        onClick={() => this.props.handleClick(name, coords)}
      >
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Artist;

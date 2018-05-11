import React, { Component } from "react";

const buttonStyle = {
  margin: 5,
  padding: "10px 20px",
  background: "#333",
  color: "#FFF",
  border: 0,
  borderRadius: 0
};

class Artist extends Component {
  render() {
    const { name, coords } = this.props;

    return (
      <button
        className="artist"
        onClick={() => this.props.handleClick(name, coords)}
        style={buttonStyle}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Artist;

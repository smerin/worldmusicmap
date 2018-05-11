import React, { Component } from "react";
import Map from "./map";
import Artist from "./artist";
const wrapperStyles = {
  width: "100%",
  margin: "0 auto"
};

const artists = [
  { name: "Test BA name", coords: [-58.3816, -34.6037] },
  { name: "Test AU name", coords: [151.2093, -33.8688] }
];

class Index extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 1,
      selectedArtist: ""
    };

    this.selectArtist = this.selectArtist.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  selectArtist(name, coords) {
    console.log("hello");
    console.log(name);
    this.setState({
      center: coords,
      zoom: 2,
      selectedArtist: name
    });
  }

  handleCityClick(city) {
    this.setState({
      zoom: 2,
      center: city.coordinates
    });
  }

  // Map controls
  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2
    });
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2
    });
  }
  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1
    });
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <Map
          controls={false}
          zoom={this.state.zoom}
          center={this.state.center}
          handleZoomIn={this.handleZoomIn}
          handleZoomOut={this.handleZoomOut}
          handleReset={this.handleReset}
        />

        <div style={{ position: "absolute", top: 0 }}>
          {artists.map((artist, index) => (
            <Artist
              key={index}
              name={artist.name}
              coords={artist.coords}
              handleClick={this.selectArtist}
            />
          ))}
        </div>

        {this.state.selectedArtist && (
          <h1>Selected: {this.state.selectedArtist}</h1>
        )}
      </div>
    );
  }
}

export default Index;

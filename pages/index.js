import React, { Component } from "react";
import Page from "../layouts/main";
import Map from "./map";
import Artist from "./artist";
const wrapperStyles = {
  width: "100%",
  margin: "0 auto"
};

const artists = [
  { name: "Astor Piazzolla", coords: [-58.3816, -34.6037] },
  { name: "Fela Kuti", coords: [3.3792, 6.5244] }
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
      zoom: 4,
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
      <Page>
        <div style={wrapperStyles}>
          <Map
            controls={true}
            zoom={this.state.zoom}
            center={this.state.center}
            handleZoomIn={this.handleZoomIn}
            handleZoomOut={this.handleZoomOut}
            handleReset={this.handleReset}
          />

          <div style={{ position: "absolute", top: 10, left: 20 }}>
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
            <h1 style={{ position: "absolute", bottom: 5, left: 20 }}>
              Selected: {this.state.selectedArtist}
            </h1>
          )}
        </div>
      </Page>
    );
  }
}

export default Index;

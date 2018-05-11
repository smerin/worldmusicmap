import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

const wrapperStyles = {
  width: "100%",
  margin: "0 auto"
};

const cities = [
  // { name: "Zurich", coordinates: [8.5417, 47.3769] },
  // { name: "Singapore", coordinates: [103.8198, 1.3521] },
  // { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  // { name: "Sydney", coordinates: [151.2093, -33.8688] },
  // { name: "Lagos", coordinates: [3.3792, 6.5244] },
  // { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
  // { name: "Shanghai", coordinates: [121.4737, 31.2304] }
];

class Map extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        {this.props.controls && (
          <div className="map__controls">
            <button onClick={this.props.handleZoomIn}>{"Zoom in"}</button>
            <button onClick={this.props.handleZoomOut}>{"Zoom out"}</button>
            <button onClick={this.props.handleReset}>{"Reset"}</button>
          </div>
        )}
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20
          }}
          style={{
            zoom: spring(this.props.zoom, { stiffness: 120, damping: 20 }),
            x: spring(this.props.center[0], { stiffness: 120, damping: 20 }),
            y: spring(this.props.center[1], { stiffness: 120, damping: 20 })
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "auto"
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom}>
                <Geographies geography="/static/world-110m.json">
                  {(geographies, projection) =>
                    geographies.map(
                      (geography, i) =>
                        geography.id !== "010" && (
                          <Geography
                            key={i}
                            geography={geography}
                            projection={projection}
                            style={{
                              default: {
                                fill: "#ECEFF1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none"
                              },
                              hover: {
                                fill: "#CFD8DC",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none"
                              },
                              pressed: {
                                fill: "#FF5722",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none"
                              }
                            }}
                          />
                        )
                    )
                  }
                </Geographies>
                <Markers>
                  {cities.map((city, i) => (
                    <Marker
                      key={i}
                      marker={city}
                      // onClick={this.handleCityClick}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    );
  }
}

export default Map;

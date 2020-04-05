import React, { Component } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import List from "./List";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FjcGVya2FjcGVya2FjcGVyIiwiYSI6ImNrOGxibTk5dTAyemkzbG9jZnRobGlydTgifQ.wFKwBhZ5v6xTEqvb-k8p8g";
class App extends Component {
  state = {
    lng: 5,
    lat: 34,
    zoom: 2,
    number: 0,
    geojson: {
      type: "FeatureCollection",
      features: [],
    },
  };
  globalMap;
  handleRemoveMarker = (e) => {
    let features = this.state.geojson.features;
    const newFeatures = features.filter((features) => features.id !== e);
    this.setState({
      geojson: {
        type: "FeatureCollection",
        features: newFeatures,
      },
    });
  };
  componentDidUpdate() {
    const markers = document.querySelectorAll(".marker");

    markers.forEach((div) => div.remove());

    this.state.geojson.features.forEach((marker) => {
      let el = document.createElement("div");
      el.className = "marker";

      const tag = new mapboxgl.Marker(el, { draggable: true })
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.globalMap);

      const onDragEnd = () => {
        const lngLat = tag.getLngLat();
        const markerId = marker.id;
        let newFeatures = [];

        this.state.geojson.features.forEach((feature) => {
          if (feature.id === markerId) {
            feature.geometry.coordinates = [lngLat.lng, lngLat.lat];
            newFeatures.push(feature);
          } else {
            newFeatures.push(feature);
          }
        });

        this.setState({
          geojson: {
            type: "FeatureCollection",
            features: newFeatures,
          },
        });
      };
      tag.on("dragend", onDragEnd);
    });
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    this.globalMap = map;

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    map.on("click", (e) => {
      const lng = e.lngLat.lng;
      const lat = e.lngLat.lat;
      const coordinates = [lng, lat];
      let number = this.state.number;
      number++;
      const newFeaturesArray = [
        ...this.state.geojson.features,
        {
          id: number,
          geometry: {
            type: "Point",
            coordinates,
          },
        },
      ];

      this.setState({
        number,
        geojson: {
          type: "FeatureCollection",
          features: newFeaturesArray,
        },
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Map
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div
                  ref={(el) => (this.mapContainer = el)}
                  className="mb3 mapContainer"
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Markers
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <List
                  removeMarker={this.handleRemoveMarker}
                  geojson={this.state.geojson}
                  className="mb3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

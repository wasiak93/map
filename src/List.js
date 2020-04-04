import React from "react";
import "./List.css";

const List = ({ removeMarker, features }) => {
  return (
    <div className="list-wrapper">
      <ul>
        {features.map(feature => (
          <li key={feature.id}>
            Longitude: {feature.geometry.coordinates[0].toFixed(2)}&#176;
            Latitude: {feature.geometry.coordinates[1].toFixed(2)}&#176;
            <button id={feature.id} onClick={() => removeMarker(feature.id)}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

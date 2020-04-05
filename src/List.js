import React from "react";
import "./List.css";

const List = ({ removeMarker, geojson }) => {
  const items = geojson.features.map((feature) => (
    <tr key={feature.id}>
      <td className="h3">{feature.geometry.coordinates[0].toFixed(2)}&#176;</td>
      <td className="h3">{feature.geometry.coordinates[1].toFixed(2)}&#176;</td>
      <td>
        <button
          className="btn btn-danger"
          id={feature.id}
          onClick={() => removeMarker(feature.id)}
        >
          REMOVE
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="list-wrapper">
      <table className="table table-striped table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th>Longitude</th>
            <th>Latitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default List;

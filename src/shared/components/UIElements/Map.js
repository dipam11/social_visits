import React from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

import "./Map.css";

const Map = (props) => {
  return (
    <div className="leaflet-container">
      <MapContainer center={props.center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.center}>
          
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

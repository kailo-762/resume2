"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Position = [number, number];
interface MapProps {
  markers: {
    position: Position;
    popupContent: string;
  }[];
  initialPosition: Position;
}

export const Map = ({ initialPosition, markers }: MapProps) => {
  return (
    <MapContainer
      // @ts-ignore
      center={initialPosition}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>{marker.popupContent}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

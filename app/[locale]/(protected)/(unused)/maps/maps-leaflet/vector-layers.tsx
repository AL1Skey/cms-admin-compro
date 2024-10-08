"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import {
  MapContainer,
  TileLayer,
  Popup,
  Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Rectangle,
} from "react-leaflet";

const polyline: [number, number][] = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
];

const multiPolyline: [number, number][][] = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
];

const polygon: [number, number][] = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
];

const multiPolygon: [number, number][][] = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
];

const rectangle: [number, number][] = [
  [51.49, -0.08],
  [51.5, -0.06],
];
import { colors } from "@/lib/colors";

const VectorLayersMap = ({ height = 350 }) => {
  const { theme: mode } = useTheme();

  const [state, setState] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  });

  const position: [number, number] = [state.lat, state.lng];
  return (
    <MapContainer
      center={position}
      zoom={state.zoom}
      style={{ height: height }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        radius={0}
        center={position}
        pathOptions={{ fillColor: `hsla(${colors.primary})` }}
      />
      <CircleMarker
        center={[51.51, -0.12]}
        color={`hsla(${mode === "dark" ? "dark" : colors.warning})`}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline
        color={`hsla(${mode === "dark" ? "dark" : colors.primary})`}
        positions={polyline}
      />
      <Polyline
        color={`hsla(${mode === "dark" ? "dark" : colors.info})`}
        positions={multiPolyline}
      />
      <Polygon
        color={`hsla(${mode === "dark" ? "dark" : colors.warning})`}
        positions={polygon}
      />
      <Polygon
        color={`hsla(${mode === "dark" ? "dark" : colors.success})`}
        positions={multiPolygon}
      />
      <Rectangle
        bounds={rectangle}
        color={`hsla(${mode === "dark" ? "dark" : colors.primary})`}
      />
    </MapContainer>
  );
};
export default VectorLayersMap;

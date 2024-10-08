"use client";

import { useState } from "react";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";

import { useTheme } from "next-themes";
const rectangle: [number, number][] = [
  [51.49, -0.08],
  [51.5, -0.06],
];

interface MapState {
  lat: number;
  lng: number;
  zoom: number;
}
import { colors } from "@/lib/colors";
const LayerGroupMap = ({ height = 350 }: { height?: number }) => {
  const { theme: mode } = useTheme();

  const [state, setState] = useState<MapState>({
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
      <LayerGroup>
        <Circle radius={0} center={position} pathOptions={{ fillColor: "blue" }} />
        <Circle radius={0}
          center={position}
          pathOptions={{
            fillColor: mode === "dark" ? "dark" : colors.primary,
          }}
        />
        <LayerGroup>
          <Circle
            radius={0}
            center={[51.51, -0.08]}
            pathOptions={{
              fillColor: mode === "dark" ? "dark" : colors.warning,
            }}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup
        pathOptions={{
          fillColor: mode === "dark" ? "dark" : "bg-info",
        }}
      >
        <Popup>Popup in FeatureGroup</Popup>
        <Circle radius={0} center={[51.51, -0.06]} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  );
};

export default LayerGroupMap;

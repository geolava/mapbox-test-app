
import Map, { MapRef } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppConfig } from "../../AppConfig";
import { useState } from "react";

export default function Home() {
  const [map, setMap] = useState<MapRef | undefined>(undefined);

  // Complete the parking line component here

  return (
      <div className="w-full h-full absolute">
        <Map
            mapboxAccessToken={AppConfig.map.tileKey}
            initialViewState={{
              longitude: AppConfig.map.defaultLongitude,
              latitude: AppConfig.map.defaultLatitude,
              zoom: AppConfig.map.defaultZoom,
              pitch: 0,
            }}
            ref={e => setMap && setMap(e || undefined)}
            
            mapStyle={AppConfig.map.lightMapStyle}
          >
            
        </Map>
      </div>
  );
}


import { Geist, Geist_Mono } from "next/font/google";
import Map from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppConfig } from "../../AppConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

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
            
            mapStyle={AppConfig.map.lightMapStyle}
          >
            
        </Map>
      </div>
  );
}

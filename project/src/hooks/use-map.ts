import { City } from '../types/offer-type';
import { useEffect, useState, MutableRefObject } from 'react';
import leaflet from 'leaflet';

function useMap(mapRef: MutableRefObject<HTMLDivElement | null>, city: City) {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
    else {
      map?.setView({ lat: city.location.latitude, lng: city.location.longitude });
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;

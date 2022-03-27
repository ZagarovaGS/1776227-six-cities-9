import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Apartments, City } from '../types/offer-type';
import useMap from '../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';

type MapProps = {
  city: City;
  apartments: Apartments;
  mapClassName?: string;
}

function getMapClassName(mapClassName: string | undefined): string {
  if (mapClassName) {
    return classNames({
      'map': true,
      [mapClassName]: true,
    });
  } else {
    return 'map';
  }
}


export default function Map({ city, apartments, mapClassName }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      apartments.forEach((apartment) => {
        leaflet
          .marker({
            lat: apartment.location.latitude,
            lng: apartment.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, apartments]);

  return (
    <section className={getMapClassName(mapClassName)} ref={mapRef} />
  );
}

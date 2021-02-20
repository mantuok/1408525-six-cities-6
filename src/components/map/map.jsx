import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {offersPropTypes} from '../../utils/props-validation';

import "leaflet/dist/leaflet.css";

const CITY = [52.38333, 4.9];
const ZOOM = 12;

const Map = (props) => {
  const {offers} = props;

  const mapRef = useRef();

  useEffect(() => {

    mapRef.current = leaflet.map(`map`, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    mapRef.current.setView(CITY, ZOOM);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;
      leaflet
        .marker([latitude, longitude], {icon})
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id="map" style={{height: `500px`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: offersPropTypes
};

export default Map;

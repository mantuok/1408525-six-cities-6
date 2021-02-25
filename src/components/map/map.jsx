import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {offersPropTypes} from '../../utils/props-validation';
import {
  City,
  ZOOM
} from '../../const';
import {getCityCoordinates} from '../../utils/common'

import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers, activeCity} = props;

  const mapRef = useRef();

  const cityCoordinates = getCityCoordinates(activeCity);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    mapRef.current.setView(cityCoordinates, ZOOM);

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

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers
})

Map.propTypes = {
  offers: offersPropTypes
};

export default connect(mapStateToProps, null)(Map);

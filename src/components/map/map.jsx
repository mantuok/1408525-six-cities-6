import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {
  offersPropTypes,
  stringPropTypes
} from '../../utils/props-validation';
import {
  ZOOM,
  MapType,
  MapHeigth
} from '../../const';
import {getCityCoordinates} from '../../utils/common';
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers, nearbyOffers, activeCity, mapType, currentOffer} = props;

  const getMapData = () => {
    if (mapType === MapType.MAIN) {
      return {
        offers: offers,
        height: MapHeigth.MAIN
      }
    }
    if (mapType === MapType.NEARBY) {
      return {
        offers: nearbyOffers,
        height: MapHeigth.NEARBY
      }
    }
  }

  const renderIcon = (offer, icon) => {
      const {latitude, longitude} = offer.location;
      leaflet
        .marker([latitude, longitude], {icon})
        .addTo(mapRef.current);
  }

  const mapOffers = getMapData().offers;
  const mapHeight = getMapData().height

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

    const Icon = {
      ALL: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [27, 39]
      }),
      CURRENT: leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [27, 39]
      })
    }

    mapOffers.forEach((offer) => {
        renderIcon(offer, Icon.ALL)
    });

    if (currentOffer) {
      renderIcon(currentOffer, Icon.CURRENT)
    }

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id="map" style={{height: `${mapHeight}px`}} ref={mapRef}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
  nearbyOffers: state.nearbyOffers
});

Map.propTypes = {
  offers: offersPropTypes,
  activeCity: stringPropTypes
};

export default connect(mapStateToProps, null)(Map);

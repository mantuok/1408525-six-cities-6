import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';
import {
  offersPropTypes,
  stringPropTypes,
  numberPropTypesNotRequired,
  objectPropTypesNotRequired
} from '../../utils/props-validation';
import {
  ZOOM,
  MapType,
  MapHeigth,
  MapIconUrl
} from '../../const';
import {getCityCoordinates} from '../../utils/common';
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offers, nearbyOffers, activeCity, activeCardId, mapType, currentOffer} = props;

  const getMapData = () => {
    if (mapType === MapType.MAIN) {
      return {
        offers,
        height: MapHeigth.MAIN
      };
    }
    return {
      offers: nearbyOffers,
      height: MapHeigth.NEARBY
    };
  };

  const getIconUrl = (offer) => {
    if (offer.id === activeCardId) {
      return MapIconUrl.ACTIVE;
    }
    return MapIconUrl.ALL;
  };

  const getIcon = (offer) => {
    const icon = leaflet.icon({
      iconUrl: getIconUrl(offer),
      iconSize: [27, 39]
    });
    return icon;
  };

  const renderMarker = (offer, icon) => {
    const {latitude, longitude} = offer.location;
    leaflet
        .marker([latitude, longitude], {icon})
        .addTo(mapRef.current);
  };

  const mapOffers = getMapData().offers;
  const mapHeight = getMapData().height;

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

    mapOffers.forEach((offer) => {
      renderMarker(offer, getIcon(offer));
    });

    if (currentOffer) {
      renderMarker(currentOffer, getIcon(currentOffer));
    }

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id="map" style={{height: `${mapHeight}px`}}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
  nearbyOffers: state.nearbyOffers,
  activeCardId: state.activeCardId
});

Map.propTypes = {
  offers: offersPropTypes,
  activeCity: stringPropTypes,
  nearbyOffers: offersPropTypes,
  activeCardId: numberPropTypesNotRequired,
  mapType: stringPropTypes,
  currentOffer: objectPropTypesNotRequired
};

export default connect(mapStateToProps, null)(Map);

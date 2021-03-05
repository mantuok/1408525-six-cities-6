import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchNearbyOffers} from '../../store/api-actions';
import OfferCard from '../offer-card/offer-card';
import {
  offersPropTypes,
  stringPropTypes
} from '../../utils/props-validation';

const NearbyOffersList = (props) => {
  const {nearbyOffers, onNearbyOffersLoad} = props
  const {id} = useParams();

  console.log(id)

  console.log(nearbyOffers)

  useEffect(() => {
    onNearbyOffersLoad(id)
  }, [id])

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearbyOffers.map((nearbyOffer) => <OfferCard key={nearbyOffer.id} offer={nearbyOffer} />)}
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  nearbyOffers: state.nearbyOffers
})

const mapDispatchToProps = (dispatch) => ({
  onNearbyOffersLoad(id) {
    dispatch(fetchNearbyOffers(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NearbyOffersList)

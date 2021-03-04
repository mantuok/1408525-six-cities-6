export const adaptOffersToClient = (offers) => {
  return offers.map((offer) => {
    const adaptedOffer = ({
      ...offer,
      host: {
        ...offer.host,
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro
      },
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image
    })

    delete adaptedOffer.host.avatar_url;
    delete adaptedOffer.host.is_pro;
    delete adaptedOffer.is_favorite;
    delete adaptedOffer.is_premium;
    delete adaptedOffer.max_adults;
    delete adaptedOffer.preview_image;

    return adaptedOffer;
  })
}



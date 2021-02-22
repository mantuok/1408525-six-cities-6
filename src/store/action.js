export const ActionType = {
  SET_CITY: `setCity`,
  SET_OFFERS_PER_CITY: `setOffersPerCity`
}

export const ActionCreator = {
  setCity: () => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setOffersPerCity: () => ({
    type: ActionType.SET_OFFERS_PER_CITY,
    payload: city
  })
}

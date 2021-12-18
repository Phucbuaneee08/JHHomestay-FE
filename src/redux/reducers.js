const filterState = {
  province: '',
  type: '',
  avarageRates: '',
  amenities: [],
  generalService: [],
  minPrice: 0,
  maxPrice: 10000000,
  checkinDate: '',
  checkoutDate: '',
}

const idState = {
  id: '',
}

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "RESET":
      return filterState
    default:
      return state;
  }
}

export const homestayIdReducer = (state = idState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
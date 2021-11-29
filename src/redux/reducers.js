const filterState = {
  place: '',
  from: '',
  to: '',
  adult: -1,
  children: -1,
  baby: -1,
  pet: -1
}

export const filterReducer = ( state = filterReducer, action) => {
  switch(action.type) {
    case "UPDATE": 
      return { ...state, ...action.payload };
    default: 
      return state;
  }
}
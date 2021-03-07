export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // creating a new variable object of the id and the name
      const band = { 
        id: Math.random(),
        name: action.name }

        // then return that state using a spread operator to carry all existing state elements and adding to the bands key an array of the new variable
      return { ...state, 
        bands: [...state.bands, band]}

        case 'DELETE_BAND':
          console.log("this is happening")
          console.log(state.bands)
          console.log('action', action)
          const bands = state.bands.filter(band => band.id !== action.id);
          console.log("returning", bands)
          return { bands };

    default:
      return state;
  }
};

const defaultState = {
  cats: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ANIMALS:CREATE':
      return {
        ...state,
        cats: [...state.cats, action.cat],
      };
    default:
      return state;
  }
};

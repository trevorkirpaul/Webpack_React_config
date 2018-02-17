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
    case 'ANIMALS:FETCH_ALL:SUCCEED':
      return {
        ...state,
        cats: action.cats,
      };
    case 'CAT:CREATE:SUCCEED':
      return {
        ...state,
        cats: [...state.cats, action.cat],
      };
    case 'CAT:CREATE:FAIL':
      return {
        ...state,
        error: action.error,
      };
    case 'CAT:DELETE:SUCCEED':
      return {
        ...state,
        cats: state.cats.filter(cat => cat.id !== action.cat),
      };
    default:
      return state;
  }
};

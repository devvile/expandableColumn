export const initialState = {
    count: 0, // example state
    items: []
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'addItem':
        return { ...state, items: [...state.items, action.payload] };
      default:
        return state;
    }
  }
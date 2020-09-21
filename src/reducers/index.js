const initialState= {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        }
      }
    }

    case 'REMOVE_ITEM': {
      const cartCopy = { ...state};
      delete cartCopy[action.itemId];
      return cartCopy;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = state => Object.values(state);
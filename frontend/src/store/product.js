// const POPULATE = 'product/POPULATE';
// const TOGGLE_LIKE = 'product/TOGGLE_LIKE';

/* ----- ACTIONS ------ */

// export const populateProducts = () => {
//   return {
//     type: POPULATE,
//     product: "<<notsure>>"
//   };
// };

// export const toggleLike = (productId) => {
//   return {
//     type: TOGGLE_LIKE,
//     productId
//   };
// };

/* ------ SELECTORS ------ */

// export const getAllProducts = (state) => Object.values(state.product);

// export const getProducts = () => async (dispatch) => {
//   const response = await fetch(`/api/products`);

//   if (response.ok) {
//     const list = await response.json();
//     dispatch(load(list));
//   }
// };

const initState = {
  1: {
    id: 1,
    name: 'Mylo',
  },
  2: {
    id: 2,
    name: 'Nish',
  },
};

export default function productReducer(state = initState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    // case POPULATE:
    //   action.product.forEach(product => {
    //     newState[product.id] = product;
    //   });
    //   return newState;
    // case TOGGLE_LIKE:
    //   return {
    //     ...state,
    //     [action.productId]: {
    //       ...state[action.productId],
    //       liked: !state[action.productId].liked,
    //     },
    //   };
    default:
      return state;
  }
}

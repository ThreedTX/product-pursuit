// const POPULATE = 'product/POPULATE';
// const TOGGLE_LIKE = 'product/TOGGLE_LIKE';

//ActionType
// a string that has my reducer name/SET_PRODUCTS
//IF ERROR DOUBLE CHECK HERE MIGHT BE products/
const SET_PRODUCTS = 'products/SET_PRODUCTS';

/* ----- ACTIONS ------ */
//An action creator is a function that then returns a POJO.
/* setProducts is intaking products so that's what we want our paylaod to be. */

//Instead of => { return {  } } just return the object
const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
})

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
/* We also know we are making fetch call so good idea to make function async */
export const getProducts = () => async (dispatch) => {
  const res = await fetch('/api/products');

  if (res.ok) {
    //This ends up being the payload
    const products = await res.json();

    dispatch(setProducts(products));
  }
};
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
  //the state spread into an Object
  const newState = Object.assign({}, state);
  //const newState = { ...state }; is equivalent
  switch (action.type) {
    case SET_PRODUCTS:
      for (let product of action.payload) {
        newState[product.id] = product;
      }
      return newState;

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

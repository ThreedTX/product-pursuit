// const POPULATE = 'product/POPULATE';
// const TOGGLE_LIKE = 'product/TOGGLE_LIKE';

//ActionType
// a string that has my reducer name/SET_PRODUCTS
//IF ERROR DOUBLE CHECK HERE MIGHT BE products/
const SET_PRODUCT = 'products/SET_PRODUCT';

/* ----- ACTIONS ------ */
//An action creator is a function that then returns a POJO.
/* setProducts is intaking products so that's what we want our paylaod to be. */

//Instead of => { return {  } } just return the object
const setProduct = (payload) => ({
  type: SET_PRODUCT,
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
export const getProduct = () => async (dispatch) => {
  const res = await fetch('/api/products/:productId');

  if (res.ok) {
    //This ends up being the payload
    const product = await res.json();

    dispatch(setProduct(product));
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
    id: 3,
    userId: 2,
    name: "Litebulb",
    description: "An idea center, for your next project",
    rating: null,
    imgUrl: "",
    createdAt: "2021-01-28 21:16:05.637-06",
    updatedAt: "2021-01-28 21:16:05.637-06",
  },
  2: {
    id: 4,
    userId: 1,
    name: "Selfmade",
    description: "Do it yourself selfie customization tool",
    rating: null,
    imgUrl: "",
    createdAt: "2021-01-28 21:16:05.637-06",
    updatedAt: "2021-01-28 21:16:05.637-06",
  }
};



export default function productPageReducer(state = initState, action) {
  //the state spread into an Object
  const newState = Object.assign({}, state);
  //const newState = { ...state }; is equivalent
  switch (action.type) {
    case SET_PRODUCT:
      for (let product of action.payload) {
        newState[product.id] = product;
      }
      return newState;

    // default:
    //   return state;
  }
  return state;
}

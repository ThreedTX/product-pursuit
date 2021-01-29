
const SET_REVIEWS = 'reviews/SET_REVIEWS';

const setReviews = (payload) => ({
  type: SET_REVIEWS,
  payload,
});





const initState = {
  1: {
    productId: 1,
    userId: 2,
    comment: "Ahhh suh dude",
    rating: 5,
    createdAt: "2021-01-28 21:16:05.65-06",
    updatedAt: "2021-01-28 21:16:05.65-06"
  },
  2: {
    productId: 2,
    userId: 1,
    comment: "It's aight",
    rating: 3,
    createdAt: "2021-01-28 21:16:05.65-06",
    updatedAt: "2021-01-28 21:16:05.65-06"
  }
}


export const getReviews = () => async (dispatch) => {
  const res = await fetch('/api/reviews');

  if (res.ok) {
    //This ends up being the payload
    const reviews = await res.json();

    dispatch(setReviews(reviews));
  }
};

const reviewReducer = (state = initState, action) => {
  // eslint-disable-next-line no-unused-vars
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_REVIEWS:
      for (let review of action.payload) {
        newState[review.id] = review;
      }
    default:
      return state;
  }
};

export default reviewReducer;

const LOAD_REVIEWS = "review/LOAD_REVIEWS";
const SET_REVIEWS = 'reviews/SET_REVIEWS';

const setReviews = (payload) => ({
  type: SET_REVIEWS,
  payload,
});

const loadReviews = (payload) => ({
  type: LOAD_REVIEWS,
  payload,
});




const initState = {
  1: {
    productId: 1,
    userId: 2,
    comment: "Test 1",
    rating: 5,
    createdAt: "2021-01-28 21:16:05.65-06",
    updatedAt: "2021-01-28 21:16:05.65-06"
  },
  2: {
    productId: 2,
    userId: 1,
    comment: "Test 2",
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

export const loadReviewsForProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}/reviews`);
  if (res.ok) {
    //This ends up being the payload
    const reviews = await res.json();
    console.log(reviews)
    dispatch(loadReviews(reviews));
  }
};

const reviewReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_REVIEWS: {
      const newReviews = {};
      action.reviews.forEach(review => {
        newReviews[review.id] = review;
      })
      return {
        ...newState,
        ...newReviews
      }
    }
    case SET_REVIEWS: {
      for (let review of action.payload) {
        newState[review.id] = review;
      }
      return newState;
    }
    default:
      return state;
  }
};

export default reviewReducer;

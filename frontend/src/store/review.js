






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


const reviewReducer = (state = initState, action) => {
  // eslint-disable-next-line no-unused-vars
  const newState = Object.assign({}, state);
  switch (action.type) {
    default:
      return state;
  }
};

export default reviewReducer;

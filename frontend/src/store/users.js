const SET_USERS = 'users/SET_USERS';
// const SET_USER = 'users/SET_USER';

const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

// const setUser = (payload) => ({
//   type: SET_USER,
//   payload,
// });

const initState = {
  1: {
    username: "Threed",
    email: "GOAT@theGreatest.com"
  },
  2: {
    username: "Tupac",
    email: "still@breathin.com"
  }
}


export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');

  if (res.ok) {
    //This ends up being the payload
    const users = await res.json();

    dispatch(setUsers(users));
  }
};

// export const getUser = () => async (dispatch) => {
//   const res = await fetch('/api/users/:userId');

//   if (res.ok) {
//     //This ends up being the payload
//     const user = await res.json();

//     dispatch(setUser(user));
//   }
// };


const userReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_USERS: {
      for (let user of action.payload) {
        newState[user.id] = user;
      }
      return newState;
    }
    // case SET_USER: {
    //   newState[action.payload.user.id] = action.paylaod.user;

    //   return newState;

    // }
    default:
      return state;
  }
};

export default userReducer;

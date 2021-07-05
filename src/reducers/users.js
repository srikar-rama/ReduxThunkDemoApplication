const initialstate = {
  users: [],
  loading: false,
  error: null
};
const users = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { ...state, loading: true };
    case "GET_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "GET_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default users;

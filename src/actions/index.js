const getUsersRequest = () => {
  return {
    type: "GET_USERS_REQUEST"
  };
};
const getUsersSucsess = (users) => {
  return {
    type: "GET_USERS_SUCCESS",
    payload: users
  };
};
const getUsersFailure = (error) => {
  return {
    type: "GET_USERS_FAILURE",
    payload: error
  };
};
const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        const users = data;
        dispatch(getUsersSucsess(users));
      })
      .catch((error) => {
        const errormessage = error.message;
        dispatch(getUsersFailure(errormessage));
      });
  };
};

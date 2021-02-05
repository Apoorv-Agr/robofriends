import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS_PENDING,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAIL,
} from "./constants";
// This is a change
export const setSearchField = (text = "") => {
  // console.log("in Actions : ", text);
  return { type: CHANGE_SEARCH_FIELD, payload: text };
};

export const getRobotsData = () => {
  return (dispatch) => {
    dispatch({ type: GET_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        // this.setState({ robots: jsonResp });
        dispatch({ type: GET_ROBOTS_SUCCESS, payload: jsonResp });
      })
      .catch((err) => {
        dispatch({ type: GET_ROBOTS_FAIL, payload: err });
      });
  };
  // console.log('dispatch : ',dispatch);
  // return {type :GET_ROBOTS_PENDING }
};

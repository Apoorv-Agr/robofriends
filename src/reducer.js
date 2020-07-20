
import { CHANGE_SEARCH_FIELD } from "./constants";

import { combineReducers } from "redux";
const initialState = {
  searchField: "",
};

const searchRobotsReducer = (state = initialState, action = {}) => {
  // console.log("in reducer : ", action, " state : ", state);
//   debugger;
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
    //   const newStateObj = state;
      //   return Object.assign(newStateObj, { searchField: action.payload }); // One Way of Writing
      //   return Object.assign({}, state, { searchField: action.payload }); // Second Way of Writing
      return { ...state, searchField: action.payload }; // Third Way of Writing
    default:
      return  { ...state, searchField: '' };
  }
};

const searchRobots = combineReducers({ searchRobotsReducer });

export default searchRobots;

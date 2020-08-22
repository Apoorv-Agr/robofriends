import {
  CHANGE_SEARCH_FIELD,
  GET_ROBOTS_PENDING,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_FAIL,
} from "./constants";

import { combineReducers } from "redux";
// import { getRobotsData } from "./actions";
const initialSearchState = {
  searchField: "",
};

const initialRobotsState = {
  data: [],
  error: "",
  isPending: false,
};

const searchRobotsReducer = (state = initialSearchState, action = {}) => {
  //
  //   debugger;
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      //   const newStateObj = state;
      //   return Object.assign(newStateObj, { searchField: action.payload }); // One Way of Writing
      //   return Object.assign({}, state, { searchField: action.payload }); // Second Way of Writing
      return { ...state, searchField: action.payload }; // Third Way of Writing
    default:
      return state;
  }
};

const getRobotsReducer = (state = initialRobotsState, action = {}) => {
  //   debugger;
  switch (action.type) {
    case GET_ROBOTS_PENDING:
      return { ...state, isPending: true }; // Third Way of Writing
    case GET_ROBOTS_SUCCESS:
      return { ...state, data: action.payload, isPending: false }; // Third Way of Writing
    case GET_ROBOTS_FAIL:
      return { ...state, isPending: false, error: action.payload }; // Third Way of
    default:
      return state;
  }
};

const searchRobots = combineReducers({ searchRobotsReducer, getRobotsReducer });

export default searchRobots;

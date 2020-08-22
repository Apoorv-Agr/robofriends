import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField, getRobotsData } from "../actions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    this.props.getRobotsDataAction();
  };
  onSearchChange = (event) => {
    this.props.onSearchChangeAction(event);
  };
  render() {
    // const { robots } = this.state;
    const { searchField, isPending, robots } = this.props;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return (
        <div className="tc">
          <h1 className="f2">LOADING...</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RobotFriends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
            searchField={searchField}
          />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

/* const App = () => {
  return (
    <div className="tc">
      <h1>RobotFriends</h1>
      <SearchBox/>
      <CardList robots={robots} />
    </div>
  );
}; */

const mapActionToProps = {
  // getRobotsDataAction : getRobotsData
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRobotsDataAction: () => {
      dispatch(getRobotsData());
    },
    onSearchChangeAction: (event) =>
      dispatch(setSearchField(event.target.value)),
  };
};

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    isPending: state.getRobotsReducer.isPending,
    robots: state.getRobotsReducer.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

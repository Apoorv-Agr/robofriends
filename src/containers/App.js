import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { setSearchField } from "../actions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount = () => {
    // console.log("this.props.store : ", this.props);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        this.setState({ robots: jsonResp });
      });
  };
  onSearchChange = (event) => {
    this.props.onSearchChangeAction(event.target.value);
  };
  render() {
    const { robots } = this.state;
    const { searchField } = this.props;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
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
  onSearchChangeAction: setSearchField,
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
  };
}; */

const mapStateToProps = (state) => {
  // console.log("state : ", state);
  return {
    searchField: state.searchRobotsReducer.searchField,
  };
};

export default connect(mapStateToProps, mapActionToProps)(App);

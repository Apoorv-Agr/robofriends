import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        this.setState({ robots: jsonResp });
      });
  };
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
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
            searchField={this.state.searchField}
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

export default App;

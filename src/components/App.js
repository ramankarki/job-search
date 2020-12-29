import React from "react";
import Search from "./Search/Search";
import "./App.css";

export default class App extends React.Component {
  state = { locationInput: "", searchInput: "" };

  setLocationInput = (locationInput) => {
    this.setState({ locationInput });
  };

  setSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <Search
          locationInput={this.state.locationInput}
          setLocationInput={this.setLocationInput}
          searchInput={this.state.searchInput}
          setSearchInput={this.setSearchInput}
        />
      </React.Fragment>
    );
  }
}

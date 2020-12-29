import React from "react";
import Search from "./Search/Search";
import "./App.css";

export default class App extends React.Component {
  state = {
    searchInput: "",
    locationInput: "",
    fullTime: false,
    jobs: [],
    lastSearchInput: "",
    loading: null,
  };

  setLocationInput = (locationInput) => {
    this.setState({ locationInput });
  };

  setSearchInput = (searchInput) => {
    this.setState({ searchInput: searchInput });
  };

  onSearchSubmit = (event) => {
    event.preventDefault();

    if (!this.state.searchInput) {
      return;
    }

    this.setState({ loading: true });
    this.setState({ lastSearchInput: this.state.searchInput.slice() });
    this.setLocationInput("");
    this.setSearchInput("");

    const getJobs = async () => {
      const data = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.searchInput}&location=${this.state.locationInput}`
      );

      const jsonData = await data.json();
      this.setState({ jobs: jsonData });
      this.setState({ loading: false });
      console.log(this.state);
    };

    getJobs();
  };

  render() {
    return (
      <React.Fragment>
        <Search
          locationInput={this.state.locationInput}
          setLocationInput={this.setLocationInput}
          searchInput={this.state.searchInput}
          setSearchInput={this.setSearchInput}
          lastSearchInput={this.state.lastSearchInput}
          onSearchSubmit={this.onSearchSubmit}
          jobs={this.state.jobs}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

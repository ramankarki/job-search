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
    this.setState({ searchInput });
  };

  onSearchSubmit = (event) => {
    event.preventDefault();

    if (!this.state.searchInput) {
      return;
    }

    this.setState({ loading: true });
    this.setState({ lastSearchInput: this.state.searchInput.trim().slice() });
    this.setLocationInput("");
    this.setSearchInput("");

    const getJobs = async () => {
      const data = await fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.lastSearchInput}&location=${this.state.locationInput}`
      );

      const jsonData = await data.json();
      this.setState({ jobs: jsonData });
      this.setJobCreatedTime();
      this.setState({ loading: false });
    };

    getJobs();
  };

  jobCreatedDate = (UTCDate) => {
    const date1 = new Date(UTCDate);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  setJobCreatedTime = () => {
    let newJobs = this.state.jobs;

    newJobs = newJobs.map((job) => {
      let days = this.jobCreatedDate(job.created_at);
      job.created_at =
        days === 0
          ? "Today"
          : days === 1
          ? `${days} day ago`
          : `${days} days ago`;
      return job;
    });

    // sorting jobs by time
    newJobs = newJobs.sort((date1, date2) => {
      date1 = +date1.created_at.split(" ")[0];
      date2 = +date2.created_at.split(" ")[0];
      return date1 - date2;
    });

    this.setState({ jobs: newJobs });
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

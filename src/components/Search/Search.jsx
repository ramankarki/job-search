import React from "react";
import "./css/Search.css";

export default function Search(props) {
  const results = () => {
    if (props.loading === null) {
      return "";
    } else if (props.loading === true) {
      return [<i key="gfrtyt" className="fas fa-briefcase"></i>, "Loading..."];
    } else if (props.loading === false) {
      return [
        <i key="gfvff" className="fas fa-briefcase"></i>,
        `Found ${props.jobs.length} jobs for "${props.lastSearchInput}"`,
      ];
    }
  };

  return (
    <React.Fragment>
      <header className="header">
        <h1 className="main-page-heading">
          <strong>Github</strong> Jobs
        </h1>
        <p className="main-page-subHeading">
          Get the most available jobs for your location
        </p>
      </header>

      <main>
        <div className="form-background">
          <form className="form" onSubmit={props.onSearchSubmit}>
            <label className="input-field">
              <i className="far fa-building"></i>
              <input
                className="job-title"
                type="text"
                placeholder="Title, companies or expertise"
                value={props.searchInput}
                onChange={(event) => props.setSearchInput(event.target.value)}
                required
              />
            </label>
            <label className="input-field">
              <i className="fas fa-globe-americas"></i>
              <input
                className="job-title"
                type="text"
                placeholder="City, state, zip code or country"
                value={props.locationInput}
                onChange={(event) => props.setLocationInput(event.target.value)}
              />
            </label>
            <button className="search" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="filters">
          <p className="results-num">{results()}</p>
          <div className="filter">
            <div className="filter-heading">
              <i className="fas fa-sliders-h"></i>
              <p>Filter</p>
            </div>
            <div className="filter-tools">
              <label className="filter-checkbox">
                <input type="checkbox" /> Full Time
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Latest
              </label>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

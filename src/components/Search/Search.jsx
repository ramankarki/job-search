import React from "react";
import "./css/Search.css";

export default function Search(props) {
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

      <div className="form-background">
        <form className="form">
          <label className="input-field">
            <i className="far fa-building"></i>
            <input
              className="job-title"
              type="text"
              placeholder="Title, companies or expertise"
              value={props.locationInput}
              onChange={(event) => props.setLocationInput(event.target.value)}
            />
          </label>
          <label className="input-field">
            <i className="fas fa-globe-americas"></i>
            <input
              className="job-title"
              type="text"
              placeholder="City, state, zip code or country"
              value={props.searchInput}
              onChange={(event) => props.setSearchInput(event.target.value)}
            />
          </label>
          <button className="search" type="submit">
            Search
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

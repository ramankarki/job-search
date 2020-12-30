import React from "react";
import "./css/Spinner.css";
import "./css/Search.css";
import JobCard from "../JobCard/JobCard";

export default function Search(props) {
  const createJobCard = props.jobs.map((job) => {
    return (
      <JobCard
        key={job.id}
        logoURL={job.company_logo}
        companyName={job.company}
        jobTitle={job.title}
        jobType={job.type}
        location={job.location}
        created_at={job.created_at}
      />
    );
  });

  const results = () => {
    if (props.loading === null) {
      return "";
    } else if (props.loading === true) {
      return [
        <i key="gfrtyt" className="fas fa-briefcase"></i>,
        <span
          key="jyhbfghgfg"
          className="loader ease-out-linear rounded-full border-3 border-t-2 border-gray-200 h-7 w-7"
        ></span>,
      ];
    } else if (props.loading === false) {
      return [
        <i key="gfvff" className="fas fa-briefcase"></i>,
        `Found ${props.jobs.length} jobs for "${props.lastSearchInput}"`,
      ];
    }
  };

  return (
    <React.Fragment key="hftrhgfg5">
      <header className="header">
        <h1 className="main-page-heading">
          <strong>Github</strong> Jobs
        </h1>
        <p className="main-page-subHeading">
          Get the most available jobs for your location
        </p>
      </header>

      <main>
        <section className="form-background">
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
        </section>

        <section className="filters">
          <p className="results-num">{results()}</p>
          <div className="filter">
            {props.loading === null || props.jobs.length === 0 ? (
              ""
            ) : (
              <React.Fragment key="htgrfb">
                <div className="filter-heading">
                  <i className="fas fa-sliders-h"></i>
                  <p className="filter-text">Filter</p>
                </div>
                <div className="filter-tools">
                  <label className="filter-checkbox">
                    <input type="radio" name="jobType" /> Full Time
                  </label>
                  <label className="filter-checkbox">
                    <input type="radio" name="jobType" /> Part Time
                  </label>
                  <label className="filter-checkbox">
                    <input type="checkbox" /> Latest
                  </label>
                </div>
              </React.Fragment>
            )}
          </div>
        </section>

        <section className="job-cards">{createJobCard}</section>
      </main>
    </React.Fragment>
  );
}

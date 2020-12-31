import React from "react";
import "./css/Details.css";
import Link from "../Link";

export default function Details({ selectedJob }) {
  return (
    <div className="details">
      <aside className="details-links">
        <header>
          <h2 className="website-title">
            <strong>Search</strong> Jobs
          </h2>
        </header>
        <div className="back-to-search">
          <Link href="/" className="back-to-search">
            <i className="fas fa-arrow-left"></i>Back to search
          </Link>
        </div>
        <div className="how-to-apply">
          <p className="heading">HOW TO APPLY</p>
          <p
            className="content"
            dangerouslySetInnerHTML={{ __html: selectedJob.how_to_apply }}
          ></p>
        </div>
      </aside>
      <article className="details-content">
        <header className="details-jobTitle">
          <div className="jobTitle-time">
            <h1>
              <span className="job-title-only">{selectedJob.title}</span>
              <span className="full-time" style={{ marginLeft: "1rem" }}>
                Full Time
              </span>
            </h1>
            <p className="job-created-time">
              <i className="far fa-clock"></i>
              {selectedJob.created_at}
            </p>
          </div>
          <div className="company-logo-location">
            <picture>
              <img
                src={
                  selectedJob.company_logo ||
                  "https://placeholder.pics/svg/200/090789/FFFFFF/logo%20not%20found"
                }
                alt={selectedJob.company}
              />
            </picture>
            <div className="company-name-location">
              <p className="company-name">{selectedJob.company}</p>
              <p className="company-location">
                <i className="fas fa-globe-americas"></i>
                {selectedJob.location}
              </p>
            </div>
          </div>
        </header>
        <p
          className="details-description"
          dangerouslySetInnerHTML={{ __html: selectedJob.description }}
        ></p>
      </article>
    </div>
  );
}

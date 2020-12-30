import React from "react";
import "./css/JobCard.css";

export default function JobCard(props) {
  return (
    <section className="job-card">
      <div className="job-desc">
        <picture className="company-logo">
          <img
            src={
              props.logoURL ||
              "https://placeholder.pics/svg/200/090789/FFFFFF/logo%20not%20found"
            }
            alt={props.companyName}
          />
        </picture>
        <div className="job-title">
          <p className="company-name">{props.companyName}</p>
          <p className="title">{props.jobTitle}</p>
          <p className="full-time">{props.jobType}</p>
        </div>
      </div>

      <div className="job-time-location">
        <p className="location">
          <i className="fas fa-globe-americas"></i>
          {props.location}
        </p>
        <p className="time">
          <i className="far fa-clock"></i>
          {props.created_at} days ago
        </p>
      </div>
    </section>
  );
}

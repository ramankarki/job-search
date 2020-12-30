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
              "https://via.placeholder.com/100x100.png?text=logo+not+found"
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

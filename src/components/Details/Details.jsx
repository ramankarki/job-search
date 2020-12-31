import React from "react";
import "./css/Details.css";

export default function Details({ selectedJob }) {
  return <div>{selectedJob.title}</div>;
}

// import React from "react";
import React, { useState } from "react";

export default function Portfolio({ projectList = [], selected,onSelectFilter}) {
  let id = 0;


  projectList.sort((a, b) => {
    if (a.category === selected && b.category !== selected) {
      return -1;
    } else if (a.category !== selected && b.category === selected) {
      return 1;
    }
    return 0;
  });
  return (
    <div className="portfolio-container">
      {projectList.map((project) => (
        <div key={id++} className="portfolio-item">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

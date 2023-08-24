import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Portfolio({ projectList = [], selected }) {
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
        <div key={uuidv4()} className="portfolio-item">
          <img key={uuidv4()} src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

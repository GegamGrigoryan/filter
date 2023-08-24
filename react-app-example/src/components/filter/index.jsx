import React from "react";
import Toolbar from "../toolbar";
import Portfolio from "../portfolio";

export default function FilterPage({ projectList , selected}) {
  
  return (
    <div className="filter-page-wrp">
      <Toolbar
      projectList={projectList} 
      filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
        onSelectFilter={(event,selected) => {
          selected = event.target.textContent;
        }}
      />
      <Portfolio projectList={projectList} selected="" />
    </div>
  );
}

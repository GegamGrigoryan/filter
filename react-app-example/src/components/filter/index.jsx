// import React from "react";
import Toolbar from "../toolbar";
import Portfolio from "../portfolio";
import React, { useState } from "react";

export default function FilterPage({ projectList }) {
  const [sorttate, setSort] = useState("");

  return (
    <div className="filter-page-wrp">
      <Toolbar
        projectList={projectList}
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={sorttate}
        onSelectFilter={(event) => {
          let newValue = event.target.textContent;
          setSort(newValue);
        }}
      />
      <Portfolio projectList={projectList} selected={sorttate} />
    </div>
  );
}

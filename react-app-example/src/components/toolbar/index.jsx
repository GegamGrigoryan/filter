import React, { useState } from "react";
export default function Toolbar({
  filters,
  selected,
  onSelectFilter,
  projectList,
}) {
  // const [count, setCount] = useState(selected);
  // function onSelectFilter (event) {
  //   selected = event.target.textContent;
  //   setCount(selected);
  //  return selected;
  // };


  return (
    <div className="toolbar-container">
      {filters.map((el) => {
        return (
          <div className="toolbar-item" key={el}>
            <span onClick={onSelectFilter}>{el}</span>
          </div>
        );
      })}
    </div>
  );
}
 

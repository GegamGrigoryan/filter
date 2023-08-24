import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Toolbar({ filters, onSelectFilter }) {
  return (
    <div className="toolbar-container">
      {filters.map((el) => {
        return (
          <div className="toolbar-item" key={uuidv4()}>
            <span key={uuidv4()} onClick={onSelectFilter}>
              {el}
            </span>
          </div>
        );
      })}
    </div>
  );
}

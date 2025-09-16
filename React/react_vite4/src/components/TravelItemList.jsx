import React from "react";
import TravelItem from "./TravelItem";

const TravelItemList = ({ travels, clickHandlerModify, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {travels.map((t) => (
        <TravelItem
          key={t.id}
          t={t}
          clickHandlerModify={clickHandlerModify}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TravelItemList;

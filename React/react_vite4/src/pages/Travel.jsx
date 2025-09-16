import React from "react";

const Travel = ({ id, name, image }) => {
  return (
    <div className="my-4 border p-3 rounded">
      <h5>
        {id}. {name}
      </h5>
      <img src={image} alt={name} width="100%" />
    </div>
  );
};

export default Travel;

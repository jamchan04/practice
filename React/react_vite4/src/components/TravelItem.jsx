import React from "react";

const TravelItem = ({ t, clickHandlerModify, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3100/travels/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("삭제에 실패했습니다.");
      }

      onDelete(id);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <li className="row mb-4 p-3 border rounded align-items-center">
      <div className="col-sm-12 col-md-4 text-center">
        <img
          src={t.image}
          alt={t.name}
          className="img-fluid"
          style={{ maxHeight: "140px" }}
        />
      </div>
      <div className="col-sm-12 col-md-4 text-center fw-bold text-capitalize">
        {t.id}. {t.name}
      </div>
      <div className="col-sm-12 col-md-4 text-center mt-2 mt-md-0">
        <button
          className="btn btn-warning me-2"
          onClick={(e) => clickHandlerModify(t, e)}
        >
          Update
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(t.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TravelItem;

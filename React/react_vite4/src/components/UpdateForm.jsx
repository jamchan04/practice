import React from "react";

const UpdateForm = ({
  travel,
  setTravels,
  travels,
  setInsertMode,
  fetchTravels,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const _id = e.target.id.value;
    const _name = e.target.name.value;
    const _image = e.target.image.value;

    const updatedTravel = {
      id: _id.toString(),
      name: _name,
      image: _image,
      key: travel.key,
    };

    try {
      const response = await fetch(
        `http://localhost:3100/travels/${travel.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTravel),
        }
      );

      if (!response.ok) {
        throw new Error("수정에 실패했습니다.");
      }

      await fetchTravels();
      setInsertMode(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 mb-3">
            <label>인덱스 번호</label>
            <input
              type="text"
              name="id"
              defaultValue={travel.id}
              className="form-control"
            />
          </div>
          <div className="col-12 mb-3">
            <label>여행지 국가</label>
            <input
              type="text"
              name="name"
              defaultValue={travel.name}
              className="form-control"
            />
          </div>
          <div className="col-12 mb-3">
            <label>대표 이미지</label>
            <input
              type="text"
              name="image"
              defaultValue={travel.image}
              className="form-control"
            />
          </div>
        </div>
        <p>
          <img
            src={travel.image}
            width="100%"
            alt={travel.name}
            className="img-fluid"
          />
        </p>
        <hr />
        <input type="submit" value="수정하기" className="btn btn-primary" />
      </form>
      <div style={{ border: "0px solid blue", position: "relative" }}>
        <button
          onClick={() => setInsertMode(true)}
          className="btn btn-outline-info"
          style={{ position: "absolute", top: "-38px", right: "0" }}
        >
          뒤로 돌아가기
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default UpdateForm;

import React, { useState } from "react";

const InsertForm = ({ travels, setTravels }) => {
  const [idError, setIdError] = useState("");

  const checkDuplicateId = (id) => {
    if (!id.trim()) {
      setIdError("");
      return;
    }

    if (!/^\d+$/.test(id)) {
      setIdError("숫자만 입력 가능합니다.");
      return;
    }

    const strId = id.toString();
    const isDuplicate = travels.some((t) => t.id === strId);
    if (isDuplicate) {
      setIdError("이미 존재하는 인덱스 번호입니다!");
    } else {
      setIdError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const _id = event.target.id.value;
    const _name = event.target.name.value;
    const _image = event.target.image.value;

    if (!_id.trim() || !_name.trim()) {
      alert("모든 입력 필드를 채워주세요!");
      return;
    }

    if (idError) {
      alert(idError);
      return;
    }

    const newTravel = {
      key: crypto.randomUUID(),
      id: _id.toString(),
      name: _name,
      image: _image,
    };

    try {
      const response = await fetch("http://localhost:3100/travels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTravel),
      });

      if (!response.ok) {
        throw new Error("데이터 추가에 실패했습니다.");
      }

      const data = await response.json();
      const newTravels = [...travels, data].sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      setTravels(newTravels);
      event.target.reset();
      setIdError("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>인덱스 번호</label>
          <input
            className={`form-control ${idError ? "is-invalid" : ""}`}
            type="text"
            name="id"
            autoComplete="off"
            onChange={(e) => checkDuplicateId(e.target.value)}
          />
          {idError && <div className="invalid-feedback">{idError}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label>여행지 국가</label>
          <input
            className="form-control"
            type="text"
            name="name"
            autoComplete="off"
          />
        </div>
        <div className="col-12 mb-3">
          <label>대표 이미지</label>
          <input
            className="form-control"
            type="text"
            name="image"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="d-grid">
        <input
          className="btn btn-primary"
          type="submit"
          value="여행지 정보 입력하기 (기존 데이터와 아래 출력)"
        />
      </div>
      <hr />
    </form>
  );
};

export default InsertForm;

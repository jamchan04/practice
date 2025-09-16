import React, { useState, useEffect } from "react";
import styles from "./TravelsForm.module.css";
import InsertForm from "../components/InsertForm";
import TravelItemList from "../components/TravelItemList";
import UpdateForm from "../components/UpdateForm";

const TravelsForm = () => {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [insertMode, setInsertMode] = useState(true);
  const [inputUpdateForm, setInputUpdateForm] = useState({
    id: "",
    name: "",
    image: "",
  });

  const fetchTravels = async () => {
    try {
      const response = await fetch("http://localhost:3100/travels");
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const data = await response.json();
      const sortedData = data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setTravels(sortedData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTravels();
  }, []);

  const clickHandlerModify = (params, e) => {
    e.preventDefault();
    const t = params;
    setInsertMode(false);
    setInputUpdateForm({
      id: t.id,
      name: t.name,
      image: t.image,
    });
  };

  const onDelete = (id) => {
    setTravels(travels.filter((t) => t.id !== id));
  };

  if (loading) return <div className="container mt-5">로딩 중...</div>;
  if (error) return <div className="container mt-5">에러: {error}</div>;

  return (
    <div className="container mt-5">
      <h3>Tourist Attraction - World tour</h3>
      <hr />
      {insertMode ? (
        <>
          <InsertForm
            travels={travels}
            setTravels={setTravels}
            clickHandlerModify={clickHandlerModify}
          />
          <TravelItemList
            travels={travels}
            clickHandlerModify={clickHandlerModify}
            onDelete={onDelete}
          />
          <hr />
        </>
      ) : (
        <UpdateForm
          travel={inputUpdateForm}
          setTravels={setTravels}
          travels={travels}
          setInsertMode={setInsertMode}
          fetchTravels={fetchTravels}
        />
      )}
    </div>
  );
};

export default TravelsForm;

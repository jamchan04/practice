// pages/Travels.js
import React, { useState, useEffect } from "react";

const Travels = () => {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await fetch("http://localhost:3100/travels");
        if (!response.ok) {
          throw new Error("데이터를 불러오는데 실패했습니다.");
        }
        const data = await response.json();
        setTravels(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTravels();
  }, []);

  if (loading) return <div className="container mt-5">로딩 중...</div>;
  if (error) return <div className="container mt-5">에러: {error}</div>;

  return (
    <div className="container mt-5">
      <h3>World Travel List</h3>
      <hr />
      <ul style={{ listStyle: "none", paddingLeft: "40px" }}>
        {travels.map((t) => (
          <li key={t.id}>
            <span>{t.id}. </span>
            <span
              style={{
                display: "inline-block",
                width: "140px",
                fontWeight: "bold",
                marginBottom: "70px",
                textTransform: "capitalize",
              }}
            >
              {t.name}
            </span>
            <img src={t.image} height="140px" alt={t.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Travels;

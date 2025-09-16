import React, { useState, useEffect, useCallback } from "react";
import ListBox from "./components/ListBox";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooksHandler = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=react"
      );
      const result = await response.json();
      console.log(result);

      const newData = result.items.map((item) => {
        return {
          id: item.id,
          title: item.volumeInfo.title,
          img: item.volumeInfo.imageLinks,
          date: item.volumeInfo.publishedDate,
          content: item.volumeInfo.description,
          pages: item.volumeInfo.pageCount,
        };
      });

      console.log("newData: ", newData);
      setData(newData);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  return (
    <div className="App">
      {!loading && data.length > 0 ? <ListBox data={data} /> : <p>로딩중...</p>}
    </div>
  );
}

export default App;

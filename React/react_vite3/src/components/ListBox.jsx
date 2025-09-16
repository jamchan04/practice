import BookList from "./BookList";
import BookDetail from "./BookDetail";
import React, { useState } from "react";

const ListBox = ({ data }) => {
  const [clickId, setClickId] = useState("");

  const toggleHandler = (id) => {
    setClickId(id);
  };

  const filterBook = data.filter((item) => item.id === clickId);

  return (
    <>
      {clickId
        ? filterBook.map((item) => (
            <BookDetail data={item} key={item.id} onClickBack={toggleHandler} />
          ))
        : data.map((item) => (
            <BookList data={item} key={item.id} onClickList={toggleHandler} />
          ))}
    </>
  );
};

export default ListBox;

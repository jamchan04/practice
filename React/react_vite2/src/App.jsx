import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import User from "./components/UserList";
import AddUser from "./components/AddUser";
import ListBox from "./components/ListBox";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "짱구",
      phone: "010-1234-1203",
      info: "📞mobile",
    },
    {
      id: 2,
      name: "짱아",
      phone: "042-2345-3342",
      info: "🏠home",
    },
    {
      id: 3,
      name: "흰둥이",
      phone: "010-1321-3423",
      info: "📞mobile",
    },
  ]);

  const [visible, setVisible] = useState(false);

  const addUserHandler = (fromChildData) => {
    console.log("자식에서 전달받은 데이터", fromChildData);
    setUsers((prevUsers) => {
      return [fromChildData, ...prevUsers];
    });
    setVisible(false);
  };

  const removeUserHandler = (fromChildSelIdx) => {
    console.log("App.js", fromChildSelIdx);
    setUsers((prevUser) => {
      const updateUsers = prevUser.filter(
        (user) => user.id !== fromChildSelIdx
      );
      return updateUsers;
    });
  };

  const visibleFormHandler = () => setVisible(true);
  const toggleHandler = () => setVisible(!visible);

  return (
    <div className="container">
      {visible ? (
        <AddUser onAddUser={addUserHandler} onToggle={toggleHandler} />
      ) : (
        <button onClick={visibleFormHandler} id="visible-form-btn">
          새로운 연락처 등록
        </button>
      )}
      <ListBox users={users} onRemoveUser={removeUserHandler} />
    </div>
  );
}

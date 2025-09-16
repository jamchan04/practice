import React, { useState } from "react";
import Modal from "../layout/Modal";

const UserList = (props) => {
  const [modal, setModal] = useState("");

  const clickHandler = () => {
    setModal({ title: "경고", content: "진짜 삭제함?" });
  };

  const closeHandler = () => setModal("");
  const cancelHandler = () => {
    props.onRemoveUser(props.user.id);
    setModal("");
  };

  return (
    <>
      <div className="list-box" onClick={clickHandler}>
        <h2>{props.user.name}</h2>
        <b>{props.user.phone}</b>
        <span>{props.user.info}</span>
      </div>
      {modal && (
        <Modal
          title={modal.title}
          content={modal.content}
          onClose={closeHandler}
          onCancel={cancelHandler}
        />
      )}
    </>
  );
};

export default UserList;

import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="modal-back"></div>
      <div className="modal-wrap">
        <header>
          <h2>{props.title}</h2>
          <button id="x-btn" onClick={props.onClose}>
            X
          </button>
        </header>
        <div className="content">{props.content}</div>
        <footer>
          <button onClick={props.onClose}>취소</button>
          <button onClick={props.onCancel}>확인</button>
        </footer>
      </div>
    </>
  );
};

export default Modal;

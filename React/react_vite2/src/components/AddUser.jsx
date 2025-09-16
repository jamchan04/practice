import React, { useState, useReducer, useRef } from "react";
import Modal from "../layout/Modal";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return {
        userName: "",
        phone: "",
      };
    default:
      return state;
  }
};

const AddUser = (props) => {
  const [error, setError] = useState("");

  const [inputs, dispatch] = useReducer(inputReducer, {
    userName: "",
    phone: "",
  });
  const idRef = useRef(4);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
    }

    dispatch({ type: "CHANGE", name, value });
  };

  const addUserHandler = () => {
    const regex = /[^가-힣]/g;
    const userName = inputs.userName.replace(regex, "");
    let userInfo = "";
    if (/\d{3}-\d{3,4}-\d{4}/g.test(inputs.phone)) {
      userInfo = "📞mobile";
    } else {
      userInfo = "🏠home";
    }
    const user = {
      id: idRef.current,
      name: userName,
      phone: inputs.phone,
      info: userInfo,
    };
    if (inputs.userName === "" || inputs.phone === "") {
      return setError({
        title: "Error!",
        content: "이름과 정화번호 정보를 입력하시오.",
      });
    }
    props.onAddUser(user);
    dispatch({ type: "RESET" });
    idRef.current += 1;
    props.onToggle();
  };

  const closeHandler = (e) => {
    setError("");
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          content={error.content}
          onClose={closeHandler}
          onCancel={closeHandler}
        />
      )}
      <div className="input-wrap">
        <input
          name="userName"
          placeholder="이름"
          onChange={changeHandler}
          value={inputs.userName}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={changeHandler}
          value={inputs.phone}
        />
        <div className="button-group">
          <button onClick={addUserHandler}>추가</button>
          <button onClick={props.onToggle}>닫기</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;

import React from "react";

const UserFilter = (props) => {
  const changeHandler = (e) => {
    props.onSelect(e.target.value);
  };
  return (
    <div>
      <select onChange={changeHandler}>
        <option value="all">전체</option>
        <option value="📞mobile">모바일</option>
        <option value="🏠home">홈</option>
      </select>
    </div>
  );
};

export default React.memo(UserFilter);

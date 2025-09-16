import User from "./UserList";
import Filter from "./UserFilter";

import { useState, useMemo, useCallback, useEffect } from "react";

const ListBox = ({ users, onRemoveUser }) => {
  const [selectVal, setSelectVal] = useState("all");
  const selectChangeHandler = (fromChildSelectedVal) => {
    console.log("자식에서선택한value", fromChildSelectedVal);
    setSelectVal(fromChildSelectedVal);
  };

  const filterUsersCount = (users) => {
    return users.length;
  };

  const filterMobileUserCount = (users) => {
    return users.filter((user) => user.info === "📞mobile").length;
  };

  const getAllUserCount = useCallback(() => {
    return users.length;
  }, [users]);

  useEffect(() => {
    console.log("getAllUserCount 함수가 변경될 때 호출");
  }, [getAllUserCount]);

  const count = useMemo(() => filterUsersCount(users), [users]);
  const mobileCount = useMemo(() => filterMobileUserCount(users), [users]);

  const filterUsers = users.filter((user) => {
    if (selectVal === "all") {
      return user;
    }
    return user.info === selectVal;
  });
  return (
    <>
      <p>
        <span>친구👭 </span>
        <b>{count}</b> /<span>📱 모바일: </span>
        <b>{mobileCount}</b>
      </p>
      <Filter onSelect={selectChangeHandler} />
      <div className="user-list-wrap">
        {filterUsers.map((user) => (
          <User user={user} key={user.id} onRemoveUser={onRemoveUser} />
        ))}
      </div>
    </>
  );
};

export default ListBox;

import React from "react";
import Style from "./FriendList.module.css";
// import user from "../../data/friends.json";


export const FriendList = ({user}) => {
  return (
    <ul className={Style.friendList}>
      {user.map((item) => (
        <li className={Style.item} key={user.id}>
          <span
            className={`${Style.status} ${
              item.isOnline
                ? Style["status--active"]
                : Style["status--inactive"]
            }`}
          />
          <img
            className={Style.avatar}
            src={user.avatar}
            alt={user.name}
          />
          <p className={Style.name}>{user.name}</p>
        </li>
      ))}
    </ul>
  );
};
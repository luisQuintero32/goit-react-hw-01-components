import React from "react";
import Style from "./FriendList.module.css";
// import data from "../../data/friends.json";
import PropTypes from 'prop-types';


export const FriendList = ({user}) => {
  return (
    <ul className={Style.friendList}>
      {user.map((user) => (
        <li className={Style.item} key={user.id}>
          <span
            className={`${Style.status} ${
              user.isOnline
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

FriendList.prototype ={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id : PropTypes.number.isRequired,
};

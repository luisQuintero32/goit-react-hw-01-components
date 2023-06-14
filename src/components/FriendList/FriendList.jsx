import React from "react";
import Style from "./FriendList.module.css";
import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
  return (
    <ul className={Style.friendList}>
      {friends.map((friends) => (
        <li className={Style.item} key={friends.id}>
          <span
            className={`${Style.status} ${
              friends.isOnline
                ? Style["status--active"]
                : Style["status--inactive"]
            }`}
          />
          <img
            className={Style.avatar}
            src={friends.avatar}
            alt={friends.name}
          />
          <p className={Style.name}>{friends.name}</p>
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

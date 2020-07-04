import React from 'react';
import './styles.scss';

const UserItem = (props) => {
  return (
    <div className="user">
      <p>
        <b>Full Name: </b>
        {props.firstName} {props.lastName}
      </p>
      <p>
        <b>Occupation: </b>
        {props.occupation}
      </p>
    </div>
  );
};

export default UserItem;

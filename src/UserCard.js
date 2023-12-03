// UserCard.js
import React from 'react';

function UserCard({ userData, isSelected, onSelect, onDeselect }) {
  return (
    <div className={`user-card ${isSelected ? 'selected' : ''}`} onClick={isSelected ? onDeselect : onSelect}>
      <img src={userData.image} alt={userData.first_name} />
      <p>{`${userData.first_name} ${userData.last_name}`}</p>
    </div>
  );
}

export default UserCard;

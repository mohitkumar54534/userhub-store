import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function UserIcon() {
  return (
    <div className="user-icon">
      <FontAwesomeIcon icon={faUserPlus} />
    </div>
  );
}

export default UserIcon;

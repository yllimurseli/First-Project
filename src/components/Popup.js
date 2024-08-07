import React, { useState } from 'react';
import './user.scss';

const Popup = () => {
  const [popup, setPopup] = useState(false);
  const showPopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="popup">
      <button type="button" onClick={showPopup}>Show Popup</button>
      {popup ? (
        <div className="card">
          <h1>Popup</h1>
          <p>Lorem Ipsum dolor sit amet...</p>
          <p>Lorem Ipsum dolor sit amet...</p>
          <p>Lorem Ipsum dolor sit amet...</p>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;

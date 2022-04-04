import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_fullscreen-image">
      <div className="popup__image-container">
        <img className="popup__image" src="#" alt="" />
        <p className="popup__image-description" />
        <button className="popup__close-button popup__close-button_fullscreen-image" type="button" />
      </div>
    </div>
  );
}

export default ImagePopup;
import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_fullscreen-image ${props.card.name && 'popup_opened'}`}>
      <div className="popup__image-container">
        <img className="popup__image"
             src={props.card.link}
             alt={props.card.name} />
        <p className="popup__image-description" />
        <button className="popup__close-button popup__close-button_fullscreen-image"
                type="button"
                onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
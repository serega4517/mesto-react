import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form popup__form-profile"
              name={props.name}
              autoComplete="off"
              noValidate
        >
          {props.children}
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button onClick={props.onClose}
                className="popup__close-button"
                type="button"
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
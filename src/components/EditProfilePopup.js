import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="input-container">
        <input className="popup__input popup__input_type_name"
               id="name-input"
               placeholder="Имя"
               name="name"
               type="text"
               minLength="2"
               maxLength="40"
               required
        />
        <span className="popup__input-error name-input-error" />
      </div>
      <div className="input-container">
        <input className="popup__input popup__input_type_job"
               id="job-input"
               placeholder="Профессия"
               name="job"
               type="text"
               minLength="2"
               maxLength="200"
               required
        />
        <span className="popup__input-error job-input-error" />
      </div>
    </ PopupWithForm>
  )
}

export default EditProfilePopup;
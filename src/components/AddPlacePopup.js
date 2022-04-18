import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function changeName(e) {
    setName(e.target.value);
  }

  function changeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace(name, link);
  }


  return (
    <PopupWithForm
      title='Новое место'
      name='new-card'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="input-container">
        <input className="popup__input popup__input_type_title"
               id="place-input"
               placeholder="Название"
               name="name"
               type="text"
               minLength="2"
               maxLength="30"
               onChange={changeName}
               required
        />
        <span className="popup__input-error place-input-error" />
      </div>
      <div className="input-container">
        <input className="popup__input popup__input_type_link"
               id="link-input"
               placeholder="Ссылка на картинку"
               name="link"
               type="url"
               onChange={changeLink}
               required
        />
        <span className="popup__input-error link-input-error" />
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
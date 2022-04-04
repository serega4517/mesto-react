import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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

      <PopupWithForm
        title='Новое место'
        name='new-card'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="input-container">
          <input className="popup__input popup__input_type_title"
                 id="place-input"
                 placeholder="Название"
                 name="name"
                 type="text"
                 minLength="2"
                 maxLength="30"
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
                 required
          />
          <span className="popup__input-error link-input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar-edit'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__wrapper">
          <input className="popup__input popup__input_avatar-edit"
                 id="avatar-input"
                 placeholder="Ссылка на картинку"
                 name="avatar"
                 type="url"
                 required
          />
          <span className="popup__input-error avatar-input-error" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        title='Вы уверены?'
        name='card-remove'
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;

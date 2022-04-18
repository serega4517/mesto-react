import React, {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState('');


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

  function handleUpdateUser(name, about) {
    api.editProfile(name, about)
      .then((data) => {
        setCurrentUser(data);

        closeAllPopups();
      })
  }

  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);

        closeAllPopups();
      })
  }


  useEffect(() => {
    api.getProfile()
      .then((res) => {
        setCurrentUser(res)
      })
  }, [])


  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
      />

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

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       onUpdateAvatar={handleUpdateAvatar}
      />

      <PopupWithForm
        title='Вы уверены?'
        name='card-remove'
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;

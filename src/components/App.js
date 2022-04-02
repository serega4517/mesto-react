import React from 'react';
import logo from '../images/header-logo.svg'

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип сервиса" />
        </header>

        <main className="content">
          <section className="profile">
            <img className="profile__avatar" src="../images/avatar.png" alt="Фото профиля" />
              <button className="profile__avatar-edit-button" />
              <h1 className="profile__user-name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" />
              <p className="profile__user-job">Исследователь океана</p>
              <button className="profile__add-button" type="button" />
          </section>

          <section className="elements">

          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form-profile" name="profile" autoComplete="off" noValidate>
            <div className="input-container">
              <input className="popup__input popup__input_type_name" id="name-input" placeholder="Имя" name="name"
                     type="text" minLength="2" maxLength="40" required />
                <span className="popup__input-error name-input-error" />
            </div>
            <div className="input-container">
              <input className="popup__input popup__input_type_job" id="job-input" placeholder="Профессия" name="job"
                     type="text" minLength="2" maxLength="200" required />
                <span className="popup__input-error job-input-error" />
            </div>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button" />
        </div>
      </div>

      <div className="popup popup_type_new-card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__form-image" name="new-place" autoComplete="off" noValidate>
            <div className="input-container">
              <input className="popup__input popup__input_type_title" id="place-input" placeholder="Название" name="name"
                     type="text" minLength="2" maxLength="30" required />
                <span className="popup__input-error place-input-error" />
            </div>
            <div className="input-container">
              <input className="popup__input popup__input_type_link" id="link-input" placeholder="Ссылка на картинку"
                     name="link" type="url" required />
                <span className="popup__input-error link-input-error" />
            </div>
            <button className="popup__save-button popup__add-button" type="submit">Создать</button>
          </form>
          <button className="popup__close-button popup__close-button_card" type="button" />
        </div>
      </div>

      <div className="popup popup_type_fullscreen-image">
        <div className="popup__image-container">
          <img className="popup__image" src="#" alt="" />
            <p className="popup__image-description" />
            <button className="popup__close-button popup__close-button_fullscreen-image" type="button" />
        </div>
      </div>

      <div className="popup popup popup_card-remove">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form" name="confirm">
            <button className="popup__save-button popup__save-button_card-remove" type="submit">Да</button>
          </form>
          <button className="popup__close-button" type="button" />

        </div>
      </div>

      <div className="popup popup_avatar-edit">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__form-image" name="edit-avatar" autoComplete="off" noValidate>
            <div className="popup__wrapper">
              <input className="popup__input popup__input_avatar-edit" id="avatar-input" placeholder="Ссылка на картинку"
                     name="avatar" type="url" required />
                <span className="popup__input-error avatar-input-error" />
            </div>
            <button className="popup__save-button popup__add-button" type="submit">Сохранить</button>
          </form>
          <button className="popup__close-button" type="button" />
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

function Main(props) {

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src="../images/avatar.png" alt="Фото профиля" />
        <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" />
        <h1 className="profile__user-name">Жак-Ив Кусто</h1>
        <button onClick={props.onEditProfile} className="profile__edit-button" type="button" />
        <p className="profile__user-job">Исследователь океана</p>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" />
      </section>

      <section className="elements">

      </section>
    </main>
  );
}

export default Main;
import React from "react";

function Main() {
  return (
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
  );
}

export default Main;
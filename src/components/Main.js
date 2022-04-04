import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      });
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar"
             src={userAvatar}
             alt="Фото профиля"
        />
        <button onClick={onEditAvatar}
                className="profile__avatar-edit-button"
                type="button"
        />
        <h1 className="profile__user-name">{userName}</h1>
        <button onClick={onEditProfile}
                className="profile__edit-button"
                type="button"
        />
        <p className="profile__user-job">{userDescription}</p>
        <button onClick={onAddPlace}
                className="profile__add-button"
                type="button"
        />
      </section>

      <section className="elements">
        {cards.map((card) => (
            <Card card={card}
                  key={card._id}
                  onCardClick={onCardClick}
            />
        ))}
      </section>
    </main>
  );
}

export default Main;
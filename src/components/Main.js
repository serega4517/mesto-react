import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);


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
             src={currentUser.avatar}
             alt="Фото профиля"
        />
        <button onClick={onEditAvatar}
                className="profile__avatar-edit-button"
                type="button"
        />
        <h1 className="profile__user-name">{currentUser.name}</h1>
        <button onClick={onEditProfile}
                className="profile__edit-button"
                type="button"
        />
        <p className="profile__user-job">{currentUser.about}</p>
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
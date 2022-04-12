import React, { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }


  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
  }


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
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
            />
        ))}
      </section>
    </main>
  );
}

export default Main;
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__remove-button ${isOwn ? '' : 'element__remove-button_hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img className="element__image"
           src={card.link}
           alt={card.name}
           onClick={handleClick}
      />
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName}
                  type="button"
          />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
        <button className={cardDeleteButtonClassName} />
    </div>
  );
}

export default Card;
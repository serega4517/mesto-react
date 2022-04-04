import React from "react";

function Card({ card, onCardClick }) {

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
          <button className="element__like-button"
                  type="button"
          />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
        <button className="element__remove-button" />
    </div>
  );
}

export default Card;
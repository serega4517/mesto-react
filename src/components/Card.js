import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <img className="element__image"
           src={props.card.link}
           alt={props.card.name}
           onClick={handleClick}
      />
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" />
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
        <button className="element__remove-button" />
    </div>
  );
}

export default Card;
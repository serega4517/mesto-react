import React from "react";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
  })

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
        <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" />
        <h1 className="profile__user-name">{userName}</h1>
        <button onClick={props.onEditProfile} className="profile__edit-button" type="button" />
        <p className="profile__user-job">{userDescription}</p>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button" />
      </section>

      <section className="elements">

      </section>
    </main>
  );
}

export default Main;
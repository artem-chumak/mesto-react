const Main = ({handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, userName, userDescription, userAvatar}) => {

  return (
    <main className="main">
    <section className="profile section">
      <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={handleEditAvatarClick}></div>
      <div className="profile__info">
        <h1 className="profile__name">{userName}</h1>
        <button className="button profile__edit-button" aria-label="Изменить профиль" type="button" onClick={handleEditProfileClick}></button>
        <p className="profile__occupation">{userDescription}</p>
      </div>
      <button className="button profile__add-button" aria-label="Добавить" type="button" onClick={handleAddPlaceClick}></button>
    </section>
  </main>
  )
}

export default Main
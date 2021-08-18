export const Main = ({handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick}) => {

  return (
    <main className="main">
    <section className="profile section">
      <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
      <div className="profile__info">
        <h1 className="profile__name"></h1>
        <button className="button profile__edit-button" aria-label="Изменить профиль" type="button" onClick={handleEditProfileClick}></button>
        <p className="profile__occupation"></p>
      </div>
      <button className="button profile__add-button" aria-label="Добавить" type="button" onClick={handleAddPlaceClick}></button>
    </section>
    <section className="section elements">
      <ul className="elements__list">
      </ul>
    </section>
  </main>
  )
}
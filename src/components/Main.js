import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

const Main = ({ handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, handleCardClick }) => {

// cards
  const [cards, setCards] = useState([]);
// user info
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('')

// CARDS
useEffect (() => {
  api.getCards().then((res) => {
    const arr = res.map((item) => {
      return {
        likes: item.likes.length,
        title: item.name,
        link: item.link,
        id: item._id
      }
    })
    setCards(arr);
  }).catch((err) => {
    console.log(err)
  })
}, [])

// USER INFO
useEffect(() => {
  api.getUserInfo().then((res) => {
    setUserName(res.name);
    setUserDescription(res.about);
    setUserAvatar(res.avatar);
  }).catch((err) => {
    console.log(err)
  })
}, [])

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
    <section className="section elements">
        <ul className="elements__list">
          {cards.map((card) => { return <Card key={card.id} card={card} onCardClick={handleCardClick} />})}
        </ul>
      </section>
  </main>
  )
}

export default Main
import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({ handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick, handleCardClick }) => {

// cards
  const [cards, setCards] = useState([]);

//!
  const currentUser = React.useContext(CurrentUserContext);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some( i=> i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
    }).catch((err) => console.log(err));
  }

  const handleCardDelete = (card) => {
    api.setDelete(card._id).then((res) => {
      setCards((cards) => cards.filter((c) => c._id !== card._id))
    })
  }

//!

// CARDS
  useEffect (() => {
    api.getCards().then((res) => {
      setCards(res);
    }).catch((err) => console.log(err))
  }, [])

  return (
    <main className="main">
    <section className="profile section">
      <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={handleEditAvatarClick}></div>
      <div className="profile__info">
        <h1 className="profile__name">{currentUser.name}</h1>
        <button className="button profile__edit-button" aria-label="Изменить профиль" type="button" onClick={handleEditProfileClick}></button>
        <p className="profile__occupation">{currentUser.about}</p>
      </div>
      <button className="button profile__add-button" aria-label="Добавить" type="button" onClick={handleAddPlaceClick}></button>
    </section>
    <section className="section elements">
        <ul className="elements__list">
          {cards.map((card) => { return <Card key={card._id} card={card} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />})}
        </ul>
      </section>
  </main>
  )
}

export default Main
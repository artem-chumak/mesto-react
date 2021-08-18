// todo 1. Можно убрать лишнюю обёртку root и перенести стили в page.css или на root в index.html
// todo 2. Почистить App.js от старого кода, который замючен
// todo 3. Почистить variables.js
// todo 4. Узнать возможность сделать один useEffect на получение двух массивов данных
// todo 5. Добавить спинер
// todo 6. Передавать всю клиентскую информацию одним объектом, а не строками
// todo 7. Поменять фавикон
// todo 8. Узнать про стрелочную функцию в Card.js

import {useEffect, useState} from 'react';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import Card from './Card';
import '../index.css';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('')
  const [selectedCard, setSelectedCard] = useState(false)

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)}

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

//* CARDS
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
    })
  }, [])

//* USER INFO
  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
  }, [])

  return (
  <div className="root">
    <div className="page">
      <Header />
      <Main
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        handleEditProfileClick={onEditProfile}
        handleAddPlaceClick={onAddPlace}
        handleEditAvatarClick={onEditAvatar}
      />
      <section className="section elements">
        <ul className="elements__list">
          {cards.map((card) => { return <Card key={card.id} card={card} onCardClick={handleCardClick} />})}
        </ul>
      </section>
      <Footer />
      <PopupWithForm 
        name={"edit-profile"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm 
        name={"add-place"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm 
        name={"edit-avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  </div>
  );
}

export default App;
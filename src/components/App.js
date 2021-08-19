// todo 1. Можно убрать лишнюю обёртку root и перенести стили в page.css или на root в index.html
// todo 2. Почистить variables.js
// todo 3. Узнать возможность сделать один useEffect на получение двух массивов данных
// todo 4. Добавить спинер
// todo 5. Передавать всю клиентскую информацию одним объектом, а не строками
// todo 6. Поменять фавикон

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
// open popup
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
// cards
  const [cards, setCards] = useState([]);
// user info
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('')
// card clicked
  const [selectedCard, setSelectedCard] = useState({title:'', link:''})

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
    setSelectedCard({title:'', link:''});
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
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input className="popup__input" id="name" type="text" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-error">Mistake</span>
          <input className="popup__input" id="occupation" type="text" placeholder="Род занятий" name="about" required minLength="2" maxLength="200" />
          <span className="popup__input-error" id="occupation-error"></span>
        </PopupWithForm>
      <PopupWithForm 
        name={"add-place"}
        title={"Новое место"}
        buttonText={"Сохранить"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input className="popup__input" id="title" type="text" placeholder="Название" name="name" required minLength="2" maxLength="30" />
          <span className="popup__input-error" id="title-error">Mistake</span>
          <input className="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="link" required />
          <span className="popup__input-error" id="link-error"></span>
      </PopupWithForm>
      <PopupWithForm 
        name={"edit-avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input className="popup__input" id="avatar" type="url" placeholder="Ссылка на картинку" name="avatar" required />
          <span className="popup__input-error" id="avatar-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  </div>
  );
}

export default App;
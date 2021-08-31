// todo 1. Можно убрать лишнюю обёртку root и перенести стили в page.css или на root в index.html
// todo 2. Почистить variables.js
// todo 3. Узнать возможность сделать один useEffect на получение двух массивов данных
// todo 4. Добавить спинер
// todo 6. Поменять фавикон
// todo 7. Понять в какой момент вешается обработчик на Escap. Не до конца понимаю пока

import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {

//! 
const [currentUser, setCurrentUser] = useState({name: '', about: '', id_: ''});

useEffect(() => {
  api.getUserInfo().then((res) => {
    setCurrentUser(res);
  }).catch((err) => {
    console.log(err)
  })
}, [])

const handleUpdateUser = (data) => {
  api.setUserInfo(data).then((res) => {
    setCurrentUser(res);
  }).catch((err) => console.log(err))
  .finally(()=> closeAllPopups());
}

//!

// card clicked
  const [selectedCard, setSelectedCard] = useState({name:'', link:''})

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

// open popup
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const onEditProfile = () => {setIsEditProfilePopupOpen(true)};
  const onAddPlace = () => {setIsAddPlacePopupOpen(true)};
  const onEditAvatar = () => {setIsEditAvatarPopupOpen(true)}
// close popup
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name:'', link:''});
  }

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
}, [])

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="page">
        <Header />
        <Main
          handleEditProfileClick={onEditProfile}
          handleAddPlaceClick={onAddPlace}
          handleEditAvatarClick={onEditAvatar}
          handleCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
  </CurrentUserContext.Provider>
  );
}

export default App;
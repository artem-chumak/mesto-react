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
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
 
// cards
const [cards, setCards] = useState([]);

// CARDS
useEffect (() => {
  api.getCards().then((res) => {
    setCards(res);
  }).catch((err) => console.log(err))
}, [])

const handleCardLike = (card) => {
  const isLiked = card.likes.some( i=> i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
    setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
  }).catch((err) => console.log(err));
}

const handleCardDelete = (card) => {
  api.setDelete(card._id).then((res) => {
    setCards((cards) => cards.filter((c) => c._id !== card._id))
  }).catch((err) => console.log(err));
}


const [currentUser, setCurrentUser] = useState({name: '', about: '', id_: ''});

useEffect(() => {
  api.getUserInfo().then((res) => {
    setCurrentUser(res);
  }).catch((err) => console.log(err))
}, [])

const handleUpdateUser = (data) => {
  api.setUserInfo(data).then((res) => {
    setCurrentUser(res);
  }).catch((err) => console.log(err))
  .finally(() => closeAllPopups());
}

const handleUpdateAvatar = (data) => {
  api.setAvatar(data).then((res) => {
    setCurrentUser(res)
  }).catch((err) => console.log(err))
  .finally(() => closeAllPopups());
}

const handleAddPlaceSubmit = (data) => {
  api.setCard(data).then((res) => {
    setCards([res, ...cards]);
  }).catch((err) => console.log(err))
  .finally(() => closeAllPopups());
}

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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}
        />
      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
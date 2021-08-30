import React from 'react';
import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


const EditProfilePopup = ({ isOpen, onClose}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('45');
  const [description, setDescription] = useState('45');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  console.log(name);
  console.log(description);

  return (
    <PopupWithForm 
    name={"edit-profile"}
    title={"Редактировать профиль"}
    buttonText={"Сохранить"}
    isOpen={isOpen}
    onClose={onClose}>
      <input onChange={handleChangeName} value={name} className="popup__input" id="name" type="text" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
      <span className="popup__input-error" id="name-error">Mistake</span>
      <input onChange={handleChangeDescription} value={description} className="popup__input" id="occupation" type="text" placeholder="Род занятий" name="about" required minLength="2" maxLength="200" />
      <span className="popup__input-error" id="occupation-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup
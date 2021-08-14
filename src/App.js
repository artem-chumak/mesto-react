import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class="root">
    <div class="page">
      <header class="header section">
        <img class="logo header__logo" src="<%=require('./images/logo-header.svg')%>" alt="Логотип"/>
      </header>
      <main class="main">
        <section class="profile section">
          <div class="profile__avatar"></div>
          <div class="profile__info">
            <h1 class="profile__name"></h1>
            <button class="button profile__edit-button" aria-label="Изменить профиль" type="button"></button>
            <p class="profile__occupation"></p>
          </div>
          <button class="button profile__add-button" aria-label="Добавить" type="button"></button>
        </section>
        <section class="section elements">
          <ul class="elements__list">
          </ul>
        </section>
      </main>
      <footer class="footer section">
        <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
    </div>
    <section class="popup popup_type_input" id="delete-conformation">
      <div class="popup__container popup__container_type_input">
        <h2 class="popup__title">Вы уверены?</h2>
        <button class="button popup__exit-button" type="button" aria-label="Закрыть"></button>
        <form class="popup__form" id="delete-conformation-form" action='#' name="delete-conformation-form" novalidate>
          <button class="button popup__save-button" type="submit" aria-label="Да">Да</button>
        </form>
      </div>
    </section>
    <section class="popup popup_type_input" id="edit-avatar">
      <div class="popup__container popup__container_type_input">
        <h2 class="popup__title">Обновить аватар</h2>
        <button class="button popup__exit-button" type="button" aria-label="Закрыть"></button>
        <form class="popup__form" id="avatar-edit-form" action='#' name="avatar-edit-form" novalidate>
          <input class="popup__input" id="avatar" type="url" placeholder="Ссылка на картинку" name="avatar" required />
          <span class="popup__input-error" id="avatar-error"></span>
          <button class="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
    <section class="popup popup_type_input" id="edit-profile">
      <div class="popup__container popup__container_type_input">
        <h2 class="popup__title">Редактировать профиль</h2>
        <button class="button popup__exit-button" type="button" aria-label="Закрыть"></button>
        <form class="popup__form" id="plofile-edit-form" action='#' name="profile-edit-form" novalidate>
          <input class="popup__input" id="name" type="text" placeholder="Имя" name="name" required minlength="2"
            maxlength="40" />
          <span class="popup__input-error" id="name-error">Mistake</span>
          <input class="popup__input" id="occupation" type="text" placeholder="Род занятий" name="about" required
            minlength="2" maxlength="200" />
          <span class="popup__input-error" id="occupation-error"></span>
          <button class="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
    <section class="popup popup_type_input" id="add-place">
      <div class="popup__container popup__container_type_input">
        <h2 class="popup__title">Новое место</h2>
        <button class="button popup__exit-button" type="button" aria-label="Закрыть"></button>
        <form class="popup__form" id="add-element-form" action='#' name="add-element-form" novalidate>
          <input class="popup__input" id="title" type="text" placeholder="Название" name="name" required minlength="2"
            maxlength="30" />
          <span class="popup__input-error" id="title-error">Mistake</span>
          <input class="popup__input" id="link" type="url" placeholder="Ссылка на картинку" name="link" required />
          <span class="popup__input-error" id="link-error"></span>
          <button class="button popup__save-button popup__save-button_disabled" disabled type="submit"
            aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
    <section class="popup popup_type_image" id="image-popup">
      <div class="popup__container popup__container_type_image">
        <button class="button popup__exit-button" type="button" aria-label="Закрыть"></button>
        <img class="popup__image" src="#" alt="Фото места" />
        <h2 class="popup__caption"></h2>
      </div>
    </section>
    <template class="element-template">
      <li class="element">
        <button class="button element__delete-button" aria-label="Удалить" type="button"></button>
        <img class="element__image" src="#" alt="Фото места" />
        <div class="element__info">
          <h2 class="element__title"></h2>
          <div class="element__like">
            <button class="button element__like-button" aria-label="Понравилось" type="button"></button>
            <span class="element__like-counter"></span>
          </div>
        </div>
      </li>
    </template>
  </div>
  );
}

export default App;

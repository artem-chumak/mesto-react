import { Children } from "react" //????

const PopupWithForm = ({title, name, isOpen, children, onClose}) => {
  return (
    <section className={isOpen ? "popup popup_type_input popup_opened" : "popup popup_type_input"} id={name}>
    <div className="popup__container popup__container_type_input">
      <h2 className="popup__title">{title}</h2>
      <button onClick={onClose} className="button popup__exit-button" type="button" aria-label="Закрыть"></button>
      <form className="popup__form" id="add-element-form" action='#' name={name} noValidate>
        {children}
        <button className="button popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
      </form>
    </div>
  </section>
  )
}

export default PopupWithForm
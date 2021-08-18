export const ImagePopup = () => {
  return (
    <section className="popup popup_type_image" id="image-popup">
    <div className="popup__container popup__container_type_image">
      <button className="button popup__exit-button" type="button" aria-label="Закрыть"></button>
      <img className="popup__image" src="#" alt="Фото места" />
      <h2 className="popup__caption"></h2>
    </div>
  </section>
  )
}
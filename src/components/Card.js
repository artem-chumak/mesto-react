export const Card = ({link, title, likes}) => {
  return (
    <li className="element">
    <button className="button element__delete-button" aria-label="Удалить" type="button"></button>
    <img className="element__image" src={link} alt={title} />
    <div className="element__info">
      <h2 className="element__title">{title}</h2>
      <div className="element__like">
        <button className="button element__like-button" aria-label="Понравилось" type="button"></button>
        <span className="element__like-counter">{likes}</span>
      </div>
    </div>
  </li>
  )
}
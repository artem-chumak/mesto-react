export const Card = ({card, onCardClick}) => {

//? почему тут нельзя записать стрелочную функцию
//? потеря контекста

  function handleClick () {
    onCardClick(card);
  }

  return (
    <li className="element">
    <button className="button element__delete-button" aria-label="Удалить" type="button"></button>
    <img className="element__image" onClick={handleClick} src={card.link} alt={card.title} />
    <div className="element__info">
      <h2 className="element__title">{card.title}</h2>
      <div className="element__like">
        <button className="button element__like-button" aria-label="Понравилось" type="button"></button>
        <span className="element__like-counter">{card.likes}</span>
      </div>
    </div>
  </li>
  )
}
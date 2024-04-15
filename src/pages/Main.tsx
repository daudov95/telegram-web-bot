
export const Main = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-info">
          <h1>Здравствуйте, Магомед.</h1>
          <p>Здесь вы можете выполнять задания в телеграм и получать за это деньги.</p>

          <span>Ваш баланс: 500р.</span>
        </div>

        <div className="main-list__wrapper">
          <ul className="main-list">
            <li className="main-list__item main-list-question">
                <div className="main-list-question__title">Позови друга</div>
                <div className="main-list-question__price">+3 р.</div>
            </li>
            <li className="main-list__item main-list-question">
                <div className="main-list-question__title">Подпишись на канал</div>
                <div className="main-list-question__price">+1.5 р.</div>
            </li>
            <li className="main-list__item main-list-question">
                <div className="main-list-question__title">Поставь реакцию</div>
                <div className="main-list-question__price">+0.4 р.</div>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}
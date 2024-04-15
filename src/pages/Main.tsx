import QuestionList from '../components/QuestionList';
import Menu from '../components/ui/Menu';

export const Main = () => {
  return (
    <div className='wrapper'>
      <div className='main'>
        
        <div className='main-content'>
          <div className='main-info'>
            <h1>Здравствуйте, Магомед.</h1>
            <p>
              Здесь вы можете выполнять задания в телеграм и получать за это
              деньги.
            </p>

            <span>Ваш баланс: 500р.</span>
          </div>

          <QuestionList/>
        </div>

        <Menu />
      </div>
    </div>
  );
};

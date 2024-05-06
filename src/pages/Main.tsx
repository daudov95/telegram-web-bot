import { useState } from 'react';
import QuestionList from '../components/QuestionList';
import Menu from '../components/ui/Menu';

export const Main = () => {
  const [coins, setCoins] = useState(0);

  const incrementCoin = () => {
    setCoins(prev => prev + 1);
  }

  return (
    <div className='wrapper'>
      <div className='main'>
        
        <div className='main-content'>
          <div className='main-info'>
            <div className="main-info-squad">
              <span>You aren't in any team</span>
              <span>Join</span>
            </div>

            <div className='main-info-coins'>SOON: { coins }</div>
          </div>

          <div className="coin__wrapper">
            <div className="coin" onClick={incrementCoin}>
              <img src="/coin.svg" alt="coin" />
            </div>
          </div>
          {/* <QuestionList/> */}
        </div>

        <Menu />
      </div>
    </div>
  );
};

import { useRef, useState } from 'react';
import QuestionList from '../components/QuestionList';
import Menu from '../components/ui/Menu';

export const Main = () => {
  const [coins, setCoins] = useState(0);
  const [team, setTeam] = useState('SOON coin community');
  const [percent, setPercent] = useState(100);
  const [count, setCount] = useState(5000);

  const coinRef = useRef();

  const incrementCoin = () => {
    setCoins(prev => prev + 1);
    setPercent(prev => prev - 1);
    setCount(prev => prev - 1);
    const timer = setTimeout(() => {
      coinRef.current.style.transform = 'rotate(90deg) skew(20deg)';
      const timer2 = setTimeout(() => {
        coinRef.current.style.transform = 'rotate(90deg) skewX(0deg)';
        clearTimeout(timer2);
      }, 50);
      clearTimeout(timer);
    }, 30);
    
  }

  return (
    <div className='wrapper'>
      <div className='main'>
        
        <div className='main-content'>
          <div className='main-info'>
            <div className="main-info__notice">Beta</div>

            <div className='main-info-coins'>SOON: { coins }</div>
            <div className="main-info-squad">
              {team ? team : <span>Join</span>}
            </div>
          </div>

          <div className="coin__wrapper">
            <div className="coin" onClick={incrementCoin} ref={coinRef}>
              {/* <img src="/coin.svg" alt="coin" /> */}
            </div>
          </div>

          <div className="coin-timer__wrapper">
            <div className="coin-timer">
              <div className="coin-timer-box">
                <div className="coin-timer__line" style={{ width: percent }}></div>
              </div>
              <div className="coin-timer__count">{ count }</div>
            </div>
          </div>
          {/* <QuestionList/> */}
        </div>

        <Menu />
      </div>
    </div>
  );
};

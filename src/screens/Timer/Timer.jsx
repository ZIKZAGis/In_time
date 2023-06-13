import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
// import styles from './Timer.module.scss'
import {CgSandClock} from 'react-icons/cg'
import { getPadTime } from '../../utils/getPadTime';
import Button from '../../components/Button/Button';
import {FaStop} from 'react-icons/fa'
import {GiPlayButton} from 'react-icons/gi'
import {BiReset} from 'react-icons/bi'



const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 2)
  const [isCounting, setIsCounting] = useState(false)

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

    if (timeLeft === 0) setIsCounting(false)

    return () => clearInterval(interval)

  }, [timeLeft, isCounting])

  const handleStart = () => {
    setIsCounting(true)
  }
  const handleStop = () => {
    setIsCounting(false)
  }
  const handleReset = () => {
    setIsCounting(false)
    setTimeLeft(2 * 60)
  }

  return (
    <div className='wrapper'>
      <Header name={`Timer`} icon={<CgSandClock/>}/>
      <div>
        <div>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div>
          {isCounting ? (
            <Button onClick={handleStop} value={<FaStop/>}/>
          ) : (
            <Button onClick={handleStart} value={<GiPlayButton/>}/>
          )}
          <Button onClick={handleReset} value={<BiReset/>}/>
        </div>
      </div>
    </div>
  );
}

export default Timer;

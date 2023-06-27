import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Timer.module.scss'
import {CgSandClock} from 'react-icons/cg'
import { getPadTime } from '../../utils/getPadTime';
import Button from '../../components/Button/Button';
import {BsPauseFill} from 'react-icons/bs'
import {GiPlayButton} from 'react-icons/gi'
import {BiReset} from 'react-icons/bi'



const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const hours = getPadTime(Math.floor(timeLeft / 60 / 60))
  const minutes = getPadTime(Math.floor((timeLeft - (hours * 60 * 60)) / 60))
  const seconds = getPadTime((timeLeft - minutes * 60) - (hours * 60 * 60))


  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)

    if (timeLeft === 0) setIsCounting(false)

    return () => clearInterval(interval)

  }, [timeLeft, isCounting])

  useEffect(() => {
    return setTimeLeft(((hour * 60 * 60) + (min * 60) + +sec) <= 359999 ? ((hour * 60 * 60) + (min * 60) + +sec) : 359999)
  }, [hour, min, sec])

  const handleStart = () => {
    setIsCounting(true)
  }
  const handlePause = () => {
    setIsCounting(false)
  }
  const handleReset = () => {
    setIsCounting(false)
    setTimeLeft(((hour * 60 * 60) + (min * 60) + +sec) <= 359999 ? ((hour * 60 * 60) + (min * 60) + +sec) : 359999)
  }

  return (
    <div className='wrapper'>
      <Header name={`Timer`} icon={<CgSandClock style={isCounting && {color: '#ff5b00'}}/>}/>
      <div className='wrapper'>
        <div className={styles.timer}>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className={styles.setting}>
          <h2>Enter time</h2>
          <div>
            <input type="number" name="hours" id="hours" placeholder='hour' onChange={(e) => setHour(e.target.value)} disabled={isCounting ? true : false}/>
            <input type="number" name="minutes" id="minutes" placeholder='min' onChange={(e) => setMin(e.target.value)} disabled={isCounting ? true : false}/>
            <input type="number" name="seconds" id="seconds" placeholder='sec' onChange={(e) => setSec(e.target.value)} disabled={isCounting ? true : false}/>
          </div>
        </div>
        <div className={styles.control}>
          {isCounting ? (
            <Button onClick={handlePause} value={<BsPauseFill/>}/>
          ) : (
            <Button onClick={handleStart} value={<GiPlayButton/>} disabled={timeLeft > 0 ? false : true}/>
          )}
          <Button onClick={handleReset} value={<BiReset/>} disabled={timeLeft > 0 ? false : true}/>
        </div>
      </div>
    </div>
  );
}

export default Timer;

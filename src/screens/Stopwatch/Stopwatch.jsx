import Button from '../../components/Button/Button';
import Header from '../../components/header/Header';
import styles from './Stopwatch.module.scss'
import {ImStopwatch} from 'react-icons/im'
import {RiRefreshLine} from 'react-icons/ri'
import {GiPlayButton} from 'react-icons/gi'
import {BsPauseFill, BsPlusCircleDotted} from 'react-icons/bs'
import { useEffect,  useState } from 'react';
import { getPadTime } from '../../utils/getPadTime';

const Stopwatch = () => {
  const [isCounting, setIsCounting] = useState(false)
  const [isLaunched, setIsLaunched] = useState(false)
  const [laps, setLaps] = useState([])

  const initial = getPadTime(0)

  const [milliSeconds, setMilliSeconds] = useState(initial)
  const [seconds, setSeconds] = useState(initial)
  const [minutes, setMinutes] = useState(initial)
  const [hours, setHours] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      isLaunched && isCounting && setMilliSeconds(prev => getPadTime(+prev + 1))
      if (milliSeconds >= 99) {
        setSeconds(prev => getPadTime(+prev + 1))
        setMilliSeconds(initial)
      }
      if (seconds > 59) {
        setMinutes(prev => getPadTime(+prev + 1))
        setSeconds(initial)
      }

      if (minutes > 59) {
        setHours(prev => getPadTime(+prev + 1))
        setMinutes(initial)
      }

      if (hours > 99) {
        setIsCounting(false)
      }
  
    }, 10)

  
    return () => clearInterval(interval)

  }, [isLaunched, isCounting, milliSeconds, seconds, minutes, hours, initial])

  const handleStart = () => {
    setIsLaunched(true)
    setIsCounting(true)
  }
  const handlePause = () => setIsCounting(false)

  const handleRefresh = () => {
    setIsCounting(false)
    setIsLaunched(false)
    setMilliSeconds(initial)
    setSeconds(initial)
    setMinutes(initial)
    setHours(initial)
    setLaps([])
  }

  const handleNew = () => setLaps([`${hours} : ${minutes} : ${seconds} : ${milliSeconds}`, ...laps])
  

  return (
    <div className='wrapper'>
      <Header name={`Stopwatch`} icon={<ImStopwatch style={isCounting && {color: '#ff5b00'}}/>}/>
      <div className={styles.wrapper}>
        <div className={styles.time} style={{borderColor: `${isLaunched ? '#5ad006' : '#ff5b00'}`}}>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
          <span>:</span>
          <span>{milliSeconds}</span>
        </div>
        <div className={styles.mask}>
          <span>RESULT</span>
          <div className={styles.result}>
            {laps.length > 0 && laps.map((lap, index) => (
              <div key={index} className={styles.lap}>
                {lap}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.control}>
          {isCounting ? (
            <>
              <Button value={<BsPauseFill/>} onClick={handlePause}/>
              <Button value={<BsPlusCircleDotted/>} onClick={handleNew}/>
            </>
          ) : (
            <>
              <Button value={<GiPlayButton/>} onClick={handleStart}/>
              <Button value={<RiRefreshLine/>} onClick={handleRefresh} disabled={isLaunched ? false : true}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
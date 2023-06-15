import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
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

  const handleNew = () => setLaps([...laps, `${hours} : ${minutes} : ${seconds} : ${milliSeconds}`])
  

  return (
    <div className='wrapper'>
      <Header name={`Stopwatch`} icon={<ImStopwatch/>}/>
      <div className='wrapper'>
        <div className={styles.time}>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
          <span>:</span>
          <span>{milliSeconds}</span>
        </div>
        <div>
          <span>RESULT</span>
          <div className={styles.result}>
            {laps.length > 0 && laps.map((lap, index) => (
              <div key={index} className={styles.lap}>
                <span className={styles.lap_num}>{`#${index + 1}`}</span>
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
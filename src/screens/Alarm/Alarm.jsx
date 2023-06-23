import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Alarm.module.scss'
import {MdAlarmOn} from 'react-icons/md'

const Alarm = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('ru-RU'))
  const [alarm, setAlarm] = useState('')
  const [isAlarmOpen, setIsAlarmOpen] = useState(false)

  const setAlarmState = () => setIsAlarmOpen(!isAlarmOpen)

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString('ru-RU'))
  }, 1000)

  if ((alarm + ':00') === currentTime) {
    alert('time is out!')
  }

  return (
    <div className='wrapper'>
      <Header name={`Alarm`} icon={<MdAlarmOn style={alarm && {color: '#ff5b00'}}/>}/>
      <div className={styles.time}>
        {currentTime}
        {alarm && 
          <div className={styles.alarm_info}>The alarm will go off at <span>{alarm}</span></div>
        }
        <div className={styles.alarm_buttons}>
          <button type='button' onClick={() => setAlarm('')} disabled={alarm ? false : true}>Clear alarm</button>
          <button type='button' onClick={setAlarmState}>{isAlarmOpen? 'Close' : 'Set'} alarm</button>
        </div>
      </div>
      <div>
        <form>
          {isAlarmOpen && 
            <div className={styles.alarm_input}>
              <input type="time" onChange={(e) => setAlarm(e.target.value)}/>
              <MdAlarmOn/>
            </div>    
          }
        </form>
      </div>
    </div>
  );
}

export default Alarm;

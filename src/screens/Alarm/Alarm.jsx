import { useState } from 'react';
import Header from '../../components/header/Header';
import styles from './Alarm.module.scss'
import {MdAlarmOn} from 'react-icons/md'
import {getPadTime} from '../../utils/getPadTime'

const Alarm = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('ru-RU'))
  const [alarm, setAlarm] = useState('')
  const [isAlarmOpen, setIsAlarmOpen] = useState(false)


  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')

  const setAlarmState = () => setIsAlarmOpen(!isAlarmOpen)

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString('ru-RU'))
  }, 1000)

  if ((alarm + ':01') === currentTime) {
    alert('time is out!')
  }

  const setTimeAlarm = () => {
    hour && minute && setAlarm(`${getPadTime(hour)}:${getPadTime(minute)}`)
  }

  return (
    <div className='wrapper'>
      <Header name={`Alarm`} icon={<MdAlarmOn style={alarm && {color: '#ff5b00'}}/>}/>
      <div className='inner_wrapper'>
        <div className={styles.time}>
          {currentTime}
          {alarm && 
            <div className={styles.alarm_info}>The alarm will go off at <span>{alarm}</span></div>
          }
          <div className={styles.alarm_buttons}>
            <button type='button' onClick={() => setAlarm('')} disabled={alarm ? false : true}>Off alarm</button>
            <button type='button' onClick={setAlarmState}>{isAlarmOpen? 'Close' : 'Set alarm'}</button>
          </div>
        </div>
        <form className={styles.alarm_form} style={isAlarmOpen ? {left: '0', opacity: '1'} : {left: '-100vw', opacity: '0'}}>
          <div className={styles.alarm_input}>
            <input type="number" name="hours" id="hours" placeholder='H' min={0} max={23} onChange={(e) => setHour(e.target.value)}/>
            <input type="number" name="minutes" id="minutes" placeholder='M' min={0} max={59} onChange={(e) => setMinute(e.target.value)}/>
            <button type='button' onClick={setTimeAlarm} disabled={(hour && minute) ? false : true}>Set <MdAlarmOn/></button>         
          </div>
        </form>
      </div>
    </div>
  );
}

export default Alarm;

import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Clock.module.scss'
import {FiClock} from 'react-icons/fi'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  return (
    <div className='wrapper'>
      <Header name={`Clock`} icon={<FiClock/>}/>
      <div className='wrapper'>
        {time.toLocaleTimeString('ru-Ru')}
      </div>
    </div>
  );
}

export default Clock;

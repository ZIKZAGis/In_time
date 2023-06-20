import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Clock.module.scss'
import {FiClock} from 'react-icons/fi'
import { getPadTime } from '../../utils/getPadTime';

const titles = {
  ru: {
    day: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    season: ['зима', 'весна', 'лето', 'осень'],
    month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  },
  en: {
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    season: ['winter', 'spring', 'summer', 'autumn'],
    month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  }
}

const Clock = () => {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  const year = time.getFullYear()
  const date = getPadTime(time.getDate())
  const month = time.getMonth()
  const day = time.getDay() 
  const h = getPadTime(time.getHours())
  const m = getPadTime(time.getMinutes())
  const s = getPadTime(time.getSeconds())

  const getSeason = () => {
    let season;
  
    switch(month) {
      case 0 || 1:
        season = 0
        break
      case 2 || 3 || 4:
        season = 1
        break
      case 5 || 6 || 7:
        season = 2
        break
      case 11:
        season = 0
        break
      default: 
      season = 3
    }

    return season
  }

  const wrapper = document.querySelector('#wrapper')

  const next = () => {
    console.log(wrapper.childNodes[0])
  }

  const prev = () => [
    console.log(wrapper.childNodes[1])
  ]

  return (
    <div className='wrapper'>
      <Header name={`Clock`} icon={<FiClock/>}/>
      <div className={styles.slider} id='wrapper'>
        <div className={`${styles.ru_clock} ${styles.slider_item} ${styles.active}`} style={{color: 'orange'}}>
          <div>Время Года: {titles.ru.season[getSeason()]}</div>
          <div>День: {titles.ru.day[day]} {date}</div>
          <div>Месяц: {titles.ru.month[month]}</div>
          <div>Время: {`${h}:${m}:${s}`}</div>
        </div>
        <div className={`${styles.en_clock} ${styles.slider_item}`} style={{color: 'green'}}>
          <div>Season: {titles.en.season[getSeason()]}</div>
          <div>Day: {titles.en.day[day]} {date}</div>
          <div>Month: {titles.en.month[month]}</div>
          <div>Time: {`${h}:${m}:${s}`}</div>
        </div>
        <div className={`${styles.default_clock} ${styles.slider_item}`} style={{color: 'red'}}>
          <div>{`${date}.${getPadTime(month + 1)}.${year}`}</div>
          <div>{`${h}:${m}:${s}`}</div>
        </div>
        <button className={`${styles.button} ${styles.next}`} onClick={next}>next</button>
        <button className={`${styles.button} ${styles.prev}`} onClick={prev}>prev</button>
      </div>
    </div>
  );
}

export default Clock;

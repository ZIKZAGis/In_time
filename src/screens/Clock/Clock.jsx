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

  const slider = document.querySelector('#slider')
  const control = document.querySelector('#control')

  const setRuClock = () => [
    slider.childNodes[0].style.opacity = '1',
    slider.childNodes[1].style.opacity = '0',
    slider.childNodes[2].style.opacity = '0',
    control.childNodes[0].style.backgroundColor = '#ff5b00',
    control.childNodes[1].style.backgroundColor = '#202020',
    control.childNodes[2].style.backgroundColor = '#202020',
    control.childNodes[0].style.color = '#202020',
    control.childNodes[1].style.color = '#ffffff',
    control.childNodes[2].style.color = '#ffffff',
  ]

  const setEnClock = () => [
    slider.childNodes[0].style.opacity = '0',
    slider.childNodes[1].style.opacity = '1',
    slider.childNodes[2].style.opacity = '0',
    control.childNodes[0].style.backgroundColor = '#202020',
    control.childNodes[1].style.backgroundColor = '#ff5b00',
    control.childNodes[2].style.backgroundColor = '#202020',
    control.childNodes[0].style.color = '#ffffff',
    control.childNodes[1].style.color = '#202020',
    control.childNodes[2].style.color = '#ffffff',
  ]

  const setDfClock = () => [
    slider.childNodes[0].style.opacity = '0',
    slider.childNodes[1].style.opacity = '0',
    slider.childNodes[2].style.opacity = '1',
    control.childNodes[0].style.backgroundColor = '#202020',
    control.childNodes[1].style.backgroundColor = '#202020',
    control.childNodes[2].style.backgroundColor = '#ff5b00',
    control.childNodes[0].style.color = '#ffffff',
    control.childNodes[1].style.color = '#ffffff',
    control.childNodes[2].style.color = '#202020',
  ]

  return (
    <div className='wrapper'>
      <Header name={`Clock`} icon={<FiClock/>}/>
      <div className={styles.slider} id='slider'>
        <div className={`${styles.ru_clock} ${styles.slider_item}`} style={{color: 'orange', opacity: '1'}}>
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
        <div className={`${styles.default_clock} ${styles.slider_item}`}>
          <span>{h}</span>
          <div className={styles.default_date}>
            {`${date}.${getPadTime(month + 1)}.${year}`}
          </div>
          <span>{m}</span>
        </div>
      </div>
      <div className={styles.control} id='control'>
        <button className={styles.button} onClick={setRuClock} style={{backgroundColor: '#ff5b00', color: '#202020'}}>1</button>
        <button className={styles.button} onClick={setEnClock}>2</button>
        <button className={styles.button} onClick={setDfClock}>3</button>
      </div>
    </div>
  );
}

export default Clock;

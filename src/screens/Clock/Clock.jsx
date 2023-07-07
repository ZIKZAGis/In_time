import { useState } from 'react';
import Header from '../../components/header/Header';
import styles from './Clock.module.scss'
import {FiClock} from 'react-icons/fi'
import { getPadTime } from '../../utils/getPadTime';
import { getTime } from './getTime';


const Clock = () => {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  const {
    year, 
    date, 
    month, 
    day, 
    h, 
    m, 
    s, 
    getSeason, 
    setDfClock, 
    setEnClock, 
    setRuClock, 
    titles, 
    seasonIcons, 
    seasonColors
  } = getTime(time)

  return (
    <div className='wrapper'>
      <Header name={`Clock`} icon={<FiClock/>}/>

      <div className='inner_wrapper'>
        <div className={styles.slider} id='slider'>
          <div className={`${styles.ru_clock} ${styles.slider_item}`} style={{opacity: '1'}}>
            <div>
              <div className={styles.season} style={{color: `${seasonColors[getSeason()]}`}}>
                <span>
                  {titles.ru.season[getSeason()]}
                </span>
                <div className={styles.icon}>
                  {seasonIcons[getSeason()]}    
                </div>
              </div>
              <div className={styles.date}>
                {`${date} ${titles.ru.month[month]}`}
              </div>
            </div>
            <div className={styles.time}>
              <div style={{color: `${seasonColors[getSeason()]}`}}>
                {`${h}:${m}:${s}`}
              </div>
              <span>
                {titles.ru.day[day]} 
              </span>
            </div>
          </div>
          <div className={`${styles.en_clock} ${styles.slider_item}`}>
            <div className={styles.season}>{titles.en.season[getSeason()]}</div>
            <div className={styles.time}>
              {`${h}:${m}`}<span>:{s}</span>
            </div>
            <div className={styles.date}>
              {`${titles.en.day[day]}, ${date} ${titles.en.month[month]}`}
            </div>
          </div>
          <div className={`${styles.default_clock} ${styles.slider_item}`}>
            <span>{h}</span>
            <div className={styles.default_date}>
              {`${getPadTime(date)}.${getPadTime(month + 1)}.${year}`}
            </div>
            <span>{m}</span>
          </div>
        </div>
        <div className={styles.control} id='control'>
          <button className={styles.button} onClick={setRuClock} style={{backgroundColor: '#ff5b00'}}/>
          <button className={styles.button} onClick={setEnClock}/>
          <button className={styles.button} onClick={setDfClock}/>
        </div>
      </div>
    </div>
  );
}

export default Clock;

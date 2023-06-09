import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import styles from './Stopwatch.module.scss'
import {ImStopwatch} from 'react-icons/im'
import {FaStop} from 'react-icons/fa'
import {GiPlayButton} from 'react-icons/gi'
import {BsPauseFill} from 'react-icons/bs'

const Stopwatch = () => {
  return (
    <div className='wrapper'>
      <Header name={`Stopwatch`} icon={<ImStopwatch/>}/>
      <ul className={styles.list}>
            <li>hours</li>
            <li>minutes</li>
            <li>seconds</li>
            <li>milliseconds</li>
      </ul>
      <div className={styles.result}>
        result
      </div>
      <div className={styles.control}>
        <Button size={30} value={<GiPlayButton/>} fn={() => {}}/>
        <Button size={30} value={<BsPauseFill/>} fn={() => {}}/>
        <Button size={30} value={<FaStop/>} fn={() => {}}/>
        <Button size={30} value={'new'} fn={() => {}}/>
      </div>
    </div>
  );
}

export default Stopwatch;
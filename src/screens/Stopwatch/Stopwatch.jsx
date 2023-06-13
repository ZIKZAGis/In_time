import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import styles from './Stopwatch.module.scss'
import {ImStopwatch} from 'react-icons/im'
import {FaStop} from 'react-icons/fa'
import {GiPlayButton} from 'react-icons/gi'
import {BsPauseFill, BsPlusCircleDotted} from 'react-icons/bs'

const Stopwatch = () => {
  return (
    <div className='wrapper'>
      <Header name={`Stopwatch`} icon={<ImStopwatch/>}/>
      <div className='wrapper'>
        <div className={styles.time}>
          <span>00</span>
          <span>00</span>
          <span>00</span>
          <span>00</span>
        </div>
        <div className={styles.result}>
          result
        </div>
        <div className={styles.control}>
          <Button value={<GiPlayButton/>} onClick={() => {console.log('click play')}}/>
          <Button value={<BsPauseFill/>} onClick={() => {console.log('click pause')}}/>
          <Button value={<FaStop/>} onClick={() => {console.log('click stop')}}/>
          <Button value={<BsPlusCircleDotted/>} onClick={() => {console.log('click new')}}/>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
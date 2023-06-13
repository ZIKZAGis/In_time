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
      <ul className={styles.list}>
            <li>00</li>
            <li>00</li>
            <li>00</li>
            <li>00</li>
      </ul>
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
  );
}

export default Stopwatch;
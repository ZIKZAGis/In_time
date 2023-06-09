import Header from '../../components/Header/Header';
import styles from './Timer.module.scss'
import {CgSandClock} from 'react-icons/cg'

const Timer = () => {
  return (
    <div className='wrapper'>
      <Header name={`Timer`} icon={<CgSandClock/>}/>
      Timer
    </div>
  );
}

export default Timer;

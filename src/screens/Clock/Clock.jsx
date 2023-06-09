import Header from '../../components/Header/Header';
import styles from './Clock.module.scss'
import {FiClock} from 'react-icons/fi'

const Clock = () => {
  return (
    <div className='wrapper'>
      <Header name={`Clock`} icon={<FiClock/>}/>
      Clock
    </div>
  );
}

export default Clock;

import Header from '../../components/Header/Header';
import styles from './Stopwatch.module.scss'
import {ImStopwatch} from 'react-icons/im'

const Stopwatch = () => {
  return (
    <div className='wrapper'>
      <Header name={`Stopwatch`} icon={<ImStopwatch/>}/>
      Stopwatch
    </div>
  );
}

export default Stopwatch;
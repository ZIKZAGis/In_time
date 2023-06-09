import styles from './Home.module.scss'
import ScreenLink from '../../components/Screenlink/ScreenLink'
import {MdAlarmOn} from 'react-icons/md'
import {FiClock} from 'react-icons/fi'
import {ImStopwatch} from 'react-icons/im'
import {CgSandClock} from 'react-icons/cg'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>IN TIME!</h1>
      <ScreenLink name='Alarm' icon={<MdAlarmOn/>}/>
      <ScreenLink name='Clock' icon={<FiClock/>}/>
      <ScreenLink name='Stopwatch' icon={<ImStopwatch/>}/>
      <ScreenLink name='Timer' icon={<CgSandClock/>}/>
    </div>
  );
}

export default App;

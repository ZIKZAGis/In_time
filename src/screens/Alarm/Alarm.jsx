import Header from '../../components/Header/Header';
import styles from './Alarm.module.scss'
import {MdAlarmOn} from 'react-icons/md'


const Alarm = () => {
  return (
    <div className='wrapper'>
      <Header name={`Alarm`} icon={<MdAlarmOn/>}/>
      Alarm
    </div>
  );
}

export default Alarm;

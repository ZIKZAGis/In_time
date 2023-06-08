import styles from './Home.module.scss'
import ScreenLink from '../../components/Screenlink/ScreenLink'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <ScreenLink name='Alarm'/>
      <ScreenLink name='Clock'/>
      <ScreenLink name='Stopwatch'/>
      <ScreenLink name='Timer'/>
    </div>
  );
}

export default App;

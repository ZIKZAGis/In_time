import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'
import {BiArrowBack} from 'react-icons/bi'

const Header = ({name, icon}) => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <button aria-label='Back link' onClick={() => navigate('/')}>
        <BiArrowBack />
      </button>
      <h1>
        {name}
      </h1>
      <div aria-label='icon'>
        {icon}
      </div>
    </div>
  );
}

export default Header;

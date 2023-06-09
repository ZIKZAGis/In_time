import styles from './Header.module.scss'
import {BiArrowBack} from 'react-icons/bi'

const Header = ({name, icon}) => {
  return (
    <div className={styles.wrapper}>
      <a href="/" aria-label='Back link'>
        <BiArrowBack />
      </a>
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

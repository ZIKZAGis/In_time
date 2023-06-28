import styles from './Substrate.module.scss'

const Substrate = ({children}) => {
  return (
    <div className={styles.substrate}>
      {children}
    </div>
  );
}

export default Substrate;
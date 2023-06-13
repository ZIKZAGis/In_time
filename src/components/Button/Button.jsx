import styles from './Button.module.scss'

const Button = ({value, onClick, size}) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} style={{fontSize: size = 30}}>
      {value}
    </button>
  );
}

export default Button;

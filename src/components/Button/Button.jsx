import styles from './Button.module.scss'

const Button = ({value, onClick, size = 30, borderRadius = 10, disabled = false}) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} style={{fontSize: size, borderRadius: borderRadius}} disabled={disabled}>
      {value}
    </button>
  );
}

export default Button;

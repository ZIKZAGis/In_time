import styles from './Button.module.scss'

const Button = ({value, onClick, size = 30, borderRadius = 10}) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} style={{fontSize: size, borderRadius: borderRadius}}>
      {value}
    </button>
  );
}

export default Button;

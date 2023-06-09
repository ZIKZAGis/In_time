import styles from './Button.module.scss'

const Button = ({value, fn, size}) => {
  return (
    <button type='button' className={styles.button} onClick={fn} style={{fontSize: size}}>
      {value}
    </button>
  );
}

export default Button;

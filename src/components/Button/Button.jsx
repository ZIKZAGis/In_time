import styles from './Button.module.scss'

const Button = ({value, fn}) => {
  return (
    <button type='button' className={styles.button} onClick={() => fn()}>
      {value}
    </button>
  );
}

export default Button;

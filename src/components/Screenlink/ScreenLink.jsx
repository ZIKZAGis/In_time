import styles from './ScreenLink.module.scss'

const ScreenLink = ({name}) => {
    return (
        <a className={styles.link} href={`/${name}`}>{name}</a>
    )
}

export default ScreenLink
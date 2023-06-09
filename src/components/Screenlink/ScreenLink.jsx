import styles from './ScreenLink.module.scss'

const ScreenLink = ({name, icon}) => {
    return (
        <a className={styles.link} href={`/${name}`}>
            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        </a>
    )
}

export default ScreenLink
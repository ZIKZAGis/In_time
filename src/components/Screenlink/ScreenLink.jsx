import { useNavigate } from 'react-router-dom'
import styles from './ScreenLink.module.scss'

const ScreenLink = ({name, icon}) => {
    const navigate = useNavigate()
    return (
        <button className={styles.button} onClick={() => navigate(`/${name}`)}>
            <div>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        </button>
    )
}

export default ScreenLink
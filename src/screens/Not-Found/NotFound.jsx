import Header from "../../components/header/Header"
import {MdOutlineSearchOff} from 'react-icons/md'
import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className="wrapper">
            <Header name='Page not found' icon={<MdOutlineSearchOff/>}/>
            <div>
                <img className={styles.img} src="https://cdn3.iconfinder.com/data/icons/network-and-communications-10/32/network_Error_lost_no_page_not_found-512.png" alt="page not found" />
            </div>
            <div>
                <p className={styles.text}>Page not found :(</p>
            </div>
        </div>
    )
}

export default NotFound
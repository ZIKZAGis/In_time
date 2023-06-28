const TimerRing = ({children, style}) => {
    return (
        <div className={style.timer}>
            <svg className={style.svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className={style.circle}>
                    <circle className={style.path} cx="50" cy="50" r="45"/>
                </g>
            </svg>
            {children}
        </div>
    )
}

export default TimerRing
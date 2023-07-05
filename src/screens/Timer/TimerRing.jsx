const TimerRing = ({children, style, timeLeft, timeLimit, isCounting}) => {
    const PATH_LENGTH = 283
    const COLORS = {
        info: {
            color: 'green'
        },
        warning: {
            color: 'orange',
        },
        alert: {
            color: 'red'
        },
        base: {
            color: '#ff5b00'
        }
    }

    const getPathColor = () => {
        const {alert, warning, info, base} = COLORS
        if (timeLimit === 0) {
            return base.color
        }

        else if (timeLeft > 10) {
            return info.color
        } 
        else if (timeLeft <= 10 && timeLeft > 5) {
            return warning.color
        } 
        else if (timeLeft <= 5) {
            return alert.color
        }
    }

    const calculateTimeFraction = () => {
        const rawTime = timeLeft / timeLimit
        const pathStart = timeLeft > 0 ? PATH_LENGTH : 0
        const pathEnd = timeLeft > 0 ? (rawTime - (1 / timeLimit) * (1 - rawTime)) * PATH_LENGTH : 0
        const path = `${pathEnd} ${pathStart}`
        return path
    }

    return (
        <div className={style.timer} style={{backgroundColor: `${isCounting ? '#151515' : '#202020'}`}}>
            <svg className={style.svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className={style.circle}>
                    <circle className={style.path} cx="50" cy="50" r="45"/>
                    <path
                        id="base-timer-path-remaining"
                        className={style.path_remaining}
                        style={{
                            strokeDasharray: calculateTimeFraction(),
                            stroke: getPathColor()
                        }}
                        d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                        "
                    />
                </g>
            </svg>
            {children}
        </div>
    )
}

export default TimerRing
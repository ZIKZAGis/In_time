import { useCallback, useState } from 'react'
import styles from './InputNumber.module.scss'

const InputNumber = ({name, maxVal, placeHolder, isDisabled = false, setTime}) => {
    const [val, setVal] = useState('')
   
    const setNumber = useCallback(({target}) => {
        let {value, min, max} = target
        value = Math.max(Number(min), Math.min(Number(max), Number(value)))

        setVal(value || '')
        setTime(value)
    }, [setTime])

    return (
        <>
            <input 
                className={styles.input}
                type="number" 
                name={name} 
                id={name} 
                min={0} 
                max={maxVal} 
                placeholder={placeHolder} 
                onChange={setNumber} 
                value={val}
                disabled={isDisabled ? true : false}/>
        </>
    )
}

export default InputNumber
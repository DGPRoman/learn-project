import * as React from 'react'
import styles from './reset-btn.module.css'

export const ResetButton = ({reset}: {reset: ()=> void}) => {
    return <button type="button" onClick={reset} className={styles.primary}>Reset</button>
}

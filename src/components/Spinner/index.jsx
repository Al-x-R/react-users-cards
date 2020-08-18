import React from "react"
import styles from './Spinner.module.scss'

function Spinner() {

    return (
        <div className={styles.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
import React from "react"
import styles from './Error.module.scss'

function Error() {
    return (
        <div className={styles.site}>
            <div className={styles.sketch}>
                <div className={`${styles.beeSketch} ${styles.red}`}/>
                <div className={`${styles.beeSketch} ${styles.blue}`}/>
            </div>
            <h1>404:
                <small>Users Not Found</small></h1>
        </div>
    )
}

export default Error
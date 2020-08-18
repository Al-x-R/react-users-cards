import React from "react"
import styles from './Pagination.module.scss'

function NextBtn(props) {
    const {onClick} = props

    return (
            <div className={styles.button}
                 onClick={onClick}>next</div>
    )
}

export default NextBtn
import React from "react"
import styles from './Pagination.module.scss'

function PervBtn(props) {
    const {onClick} = props

    return (
        <div className={styles.button}
             onClick={onClick}>prev</div>
    )
}

export default PervBtn
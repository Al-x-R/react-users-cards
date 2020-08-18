import React from "react"
import styles from './Pagination.module.scss'
import Icon from '@mdi/react'
import {mdiSkipBackward} from '@mdi/js'

function PervBtn(props) {

    const {onClick} = props

    return (
        <div className={styles.button}
             onClick={onClick}>
            <Icon path={mdiSkipBackward} size={1} color="#656565"/>
        </div>
    )
}

export default PervBtn
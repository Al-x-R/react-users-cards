import React from "react"
import styles from './Pagination.module.scss'
import Icon from '@mdi/react'
import {mdiSkipForward} from '@mdi/js'

function NextBtn(props) {

    const {onClick} = props

    return (
        <div className={styles.button}
             onClick={onClick}><Icon path={mdiSkipForward} size={1} color="#656565"/>
        </div>
    )
}

export default NextBtn
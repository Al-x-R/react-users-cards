import React from "react"
import styles from './UserCard.module.scss'

function UserCard(props) {
    const {user: {picture, name}} = props
    const {large, medium} = picture
    const {title, first, last} = name

    return (
        <li>
            <section className={styles.userInfo}>
                <img src={large} alt={name}/>
                <h3>`{title} {last}`</h3>

            </section>
        </li>
    )
}

export default UserCard
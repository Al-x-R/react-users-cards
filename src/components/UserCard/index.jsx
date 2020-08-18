import React from "react"
import styles from './UserCard.module.scss'

function UserCard(props) {
    const {user: {picture, name, email, gender}} = props
    const {large} = picture
    const {title, first, last} = name

    return (

            <div className={styles.card}>
                <img src={large} alt={name} />
                    <div className={styles.descriptions}>
                        <h1>{title}</h1>
                        <h2>{first} {last}</h2>
                        <h3>Gender: {gender}</h3>
                        <h3>{email}</h3>

                    </div>
            </div>
        )
        }

        export default UserCard
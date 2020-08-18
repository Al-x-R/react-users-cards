import React from "react"
import styles from './UserCard.module.scss'

function UserCard(props) {

    const {user: {picture, name, email, gender}} = props

    const {large} = picture

    const {title, first, last} = name

    return (
        <div className={styles.card}>
            <img src={large} alt={name}/>
            <div className={styles.descriptions}>
                <span className={`${styles.title} ${styles.oneLineText}`}>{title}</span>
                <div className={`${styles.title} ${styles.oneLineText}`}>{last}</div>
                <div className={styles.info}>
                    <div>
                        <div className={`${styles.mT} ${styles.oneLineText}`}>Full Name</div>
                        <div className={`${styles.userInfo} ${styles.oneLineText}`}>{first} {last}</div>
                    </div>
                    <div>
                        <div className={`${styles.mT} ${styles.oneLineText}`}>Gender</div>
                        <div className={`${styles.userInfo} ${styles.oneLineText}`}>{gender}</div>
                    </div>
                    <div>
                        <div className={`${styles.mT} ${styles.oneLineText}`}>Email</div>
                        <div className={`${styles.userInfo} ${styles.line_clamp}`}
                             title={email}>{email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
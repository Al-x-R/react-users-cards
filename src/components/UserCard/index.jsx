import React from "react"
import styles from './UserCard.module.scss'

function UserCard(props) {
    const {user: {picture, name, email, gender}} = props
    const {large} = picture
    const {title, first, last} = name

    return (

        <section className={styles.wrapper}>
            <div className={styles.left}>
                <img src={large}
                     alt={name}/>
                <h4>{title}</h4>
                <p>{last}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.info}>
                    <h3>Information</h3>
                    <div className={styles.infoData}>
                        <span className={styles.infoDataTitle}>Full name</span>
                        <p>{first} {last}</p>
                            <span>Gender</span>
                            <p>{gender}</p>
                            <span>Email</span>
                            <p>{email}</p>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default UserCard